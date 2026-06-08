---
title: PLC Messaging
---

# PLC Messaging

## Scenario

`TechIndustry.TwinCAT.IoTCore` includes a PLC-side message bus. Use it when PLC components should publish events or receive commands without hard-coding direct references between every block.

The main pieces are:

- `FB_Message`: base message with `MessageType` and timestamp.
- `FB_EventMessage`: event marker for messages produced by PLC logic.
- `FB_CommandMessage`: command marker for messages consumed by PLC logic.
- `FB_Listener`: base block that registers message types and overrides `OnMessage`.
- `FB_Messenger`: dispatches direct messages and enqueues events/commands.
- `FB_MessagesQueue`: task-backed queue that drains messages through `ServiceLocator.fbTasks`.

## Dispatch Rules

`FB_Messenger.Send()` classifies the message by interface:

```pascal title="FB_Messenger.Send model"
IF __QUERYINTERFACE(ipMessage^, ipEvent) THEN
    // Event messages are queued and drained by Constants.sEventsTask.
    fbEventsQueue.Enqueue(ipSender, ipMessage);
ELSIF __QUERYINTERFACE(ipMessage^, ipCommand) THEN
    // Command messages are queued and drained by Constants.sCommandsTask.
    fbCommandsQueue.Enqueue(ipSender, ipMessage);
ELSE
    // Plain messages are delivered immediately.
    CallListeners(ipSender, ipMessage);
END_IF
```

That distinction is important: events and commands are intentionally deferred so listeners do not run inside the producing block's execution path.

## Publish An Event

The sample `FB_Counter` extends `FB_ComplexBase`. When its value changes, it notifies observers and sends a typed event message.

```pascal title="FB_Counter.SetValue"
METHOD PRIVATE SetValue
VAR_INPUT
    udValue : UDINT;
END_VAR
VAR
    fbMessage : POINTER TO FB_CounterChangedEventMessage;
END_VAR

THIS^.udValue := udValue;

IF udPreValue <> udValue THEN
    // Store the last emitted value to avoid publishing duplicates.
    udPreValue := udValue;

    // Notify local signal observers registered on the complex object.
    THIS^.Notify();

    // Allocate a domain event with message type 2 and the current PLC timestamp.
    fbMessage := __NEW(FB_CounterChangedEventMessage(
        iMessageType := 2,
        stTimestamp := ServiceLocator.fbDateTimeOffset.DateTime,
        udValue := udValue));

    // The messenger routes the event to listeners registered for type 2.
    ServiceLocator.fbMessenger.Send(ipSender := THIS, ipMessage := fbMessage);
END_IF
```

## Define A Command

Commands extend `FB_CommandMessage`. The sample `FB_MesMqttCommands` exposes RPC-enabled methods that create command messages and send them through the same bus.

```pascal title="FB_CounterResetCommandMessage usage"
METHOD CounterReset : BOOL
VAR
    fbCounterResetCommandMessage : POINTER TO FB_CounterResetCommandMessage;
END_VAR

// Create a command message with a negative message type by convention.
fbCounterResetCommandMessage := __NEW(FB_CounterResetCommandMessage(
    iMessageType := -2,
    stTimestamp := ServiceLocator.fbDateTimeOffset.DateTime,
    sDevice := 'test1'));

// Send() queues it on the command queue because it implements I_Command.
ServiceLocator.fbMessenger.Send(THIS, fbCounterResetCommandMessage);

CounterReset := TRUE;
```

```pascal title="FB_ChangeOrderCommandMessage usage"
METHOD ChangeOrder : BOOL
VAR_INPUT
    stOrder : ST_Order;
END_VAR
VAR
    stOrderCopy : ST_Order;
    fbChangeOrderCommandMessage : POINTER TO FB_ChangeOrderCommandMessage;
END_VAR

// Copy the input before storing it in a dynamically allocated message.
stOrderCopy := stOrder;

fbChangeOrderCommandMessage := __NEW(FB_ChangeOrderCommandMessage(
    iMessageType := -3,
    stTimestamp := ServiceLocator.fbDateTimeOffset.DateTime,
    stOrder := stOrderCopy));

ServiceLocator.fbMessenger.Send(THIS, fbChangeOrderCommandMessage);

ChangeOrder := TRUE;
```

## Create A Listener

The sample `FB_MesMqtt` extends `FB_Listener` and registers the message types it wants to receive.

```pascal title="FB_MesMqtt.FB_init"
METHOD FB_init : BOOL
VAR_INPUT
    bInitRetains : BOOL;
    bInCopyCode : BOOL;
    ipServiceBroker : I_ServiceBroker;
END_VAR

// Store the broker dependency injected by the function block constructor.
THIS^.ipServiceBroker := ipServiceBroker;

// Add this listener as a command task so Run() is called by the main cycle.
ServiceLocator.fbTasks.AddTask(Constants.sCommandsTask, THIS^);

// Listen only to the message types this block understands.
Register(1);
Register(2);
Register(3);
```

`FB_Listener.FB_exit()` unregisters the listener automatically:

```pascal
ServiceLocator.fbMessenger.UnregisterAll(THIS^);
```

Use this base block for long-lived machine listeners so online changes and block teardown do not leave stale registrations behind.

```pascal title="FB_MesMqtt.OnMessage"
METHOD OnMessage
VAR_INPUT
    ipSender : PVOID;
    ipMessage : POINTER TO FB_Message;
END_VAR
VAR
    ipEvent : I_Event;
    sJson : STRING(2000);
END_VAR

// Ignore commands here: this handler only republishes PLC events.
IF NOT __QUERYINTERFACE(ipMessage^, ipEvent) THEN
    RETURN;
END_IF

IF ipMessage^.MessageType = 2 THEN
    // Convert the domain event to the external JSON contract.
    sJson := OnCounterChanged(ipMessage, stContext);
END_IF

IF LEN(sJson) > 0 THEN
    // Publish the event through the configured broker.
    ipServiceBroker.Send(sJson, 'industria4');
END_IF
```

## Handle Commands In A Machine Block

The sample `FB_Machine1` registers command type `-1` and handles several command message variants in `OnMessage()`.

```pascal title="FB_Machine1.FB_init"
// Register only the command this machine owns.
Register(-1);
```

```pascal title="FB_Machine1.OnMessage"
METHOD OnMessage
VAR_INPUT
    ipSender : PVOID;
    ipMessage : POINTER TO FB_Message;
END_VAR
VAR
    fbTecnestCommandMessage : POINTER TO FB_TecnestCommandMessage;
    fbSignalCommandMessage : POINTER TO FB_SignalCommandMessage;
    fbChangeOrderCommandMessage : POINTER TO FB_ChangeOrderCommandMessage;
END_VAR

IF ipMessage^.MessageType = -1 THEN
    // A signal command carries a generic ST_Value payload.
    fbSignalCommandMessage := ipMessage;
    bOutputSignal := V_TOBOOL(fbSignalCommandMessage^.Value);

ELSIF ipMessage^.MessageType = -2 THEN
    // A domain command carries a target device.
    fbTecnestCommandMessage := ipMessage;

    IF fbTecnestCommandMessage^.Device = 'test1' THEN
        fbCounter.Reset();
    END_IF

ELSIF ipMessage^.MessageType = -3 THEN
    // A change-order command carries a typed ST_Order payload.
    fbChangeOrderCommandMessage := ipMessage;
END_IF
```

## Drain Queues In MAIN

Messages are not automatically processed by TwinCAT. Run the queues from your cyclic program.

```pascal title="MAIN"
// Timer tasks are available immediately.
ServiceLocator.fbTasks.Run(TechIndustry_TwinCAT_IoTCore.Constants.sTimerTask);

IF EVENTS.bReady THEN
    // Events are generated by domain objects such as FB_Counter.
    ServiceLocator.fbTasks.Run(TechIndustry_TwinCAT_IoTCore.Constants.sEventsTask);

    // Signal tasks update typed values and notify observers.
    ServiceLocator.fbTasks.Run(TechIndustry_TwinCAT_IoTCore.Constants.sSignalsTask);

    // Command tasks process queued commands and listeners such as FB_MesMqtt.
    ServiceLocator.fbTasks.Run(TechIndustry_TwinCAT_IoTCore.Constants.sCommandsTask);
END_IF
```

## Receive A Command

`FB_MesMqtt.Run()` reads payloads from the broker, converts JSON to typed `ST_Value`, and sends PLC command messages.

```pascal title="FB_MesMqtt.Run excerpt"
sPayload := ipServiceBroker.Receive(sTopic => sTopic);

IF LEN(sPayload) > 0 THEN
    jsonDoc := fbJsonParser.ParseDocument(sPayload);

    IF fbJsonParser.HasMember(jsonDoc, 'command') THEN
        jsonProp := fbJsonParser.FindMember(jsonDoc, 'command');
        sCommand := fbJsonParser.GetString(jsonProp);

        IF sCommand = 'set' THEN
            // Convert external JSON values to the common ST_Value union.
            jsonProp := fbJsonParser.FindMember(jsonDoc, 'value');
            stValue := V_INT(DINT_TO_INT(fbJsonParser.GetInt(jsonProp)));

            // Send a command into the PLC message bus.
            fbSignalCommandMessage := __NEW(FB_SignalCommandMessage(
                iMessageType := -1,
                stTimestamp := ServiceLocator.fbDateTimeOffset.DateTime,
                stValue := stValue));

            ServiceLocator.fbMessenger.Send(THIS, fbSignalCommandMessage);
        END_IF
    END_IF
END_IF
```

## Implementation Rules

1. Use a stable `MessageType` per domain event or command.
2. Register only the message types a listener actually handles.
3. Free or unregister resources in `FB_exit` when a block registers tasks or listeners.
4. Run the task queues in `MAIN`; otherwise messages remain queued.
5. Keep external JSON conversion at the integration boundary, not inside every domain block.
6. Prefer event types for facts that already happened and command types for requested actions.
7. Use `Register(messageType)` over `RegisterAll()` unless the listener is explicitly diagnostic, like `FB_Log`.
