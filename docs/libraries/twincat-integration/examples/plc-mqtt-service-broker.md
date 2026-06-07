---
title: PLC MQTT Service Broker
---

# PLC MQTT Service Broker

## Scenario

Use the MQTT service broker when PLC code needs to exchange messages with external systems while keeping the rest of the PLC program broker-agnostic. PLC blocks depend on `I_ServiceBroker`; the concrete implementation can be `FB_MqttServiceBroker`.

## Wire The Broker

The sample `FB_MesMqtt` receives an `I_ServiceBroker` in `FB_init` and stores it as a dependency.

```pascal title="FB_MesMqtt declaration"
FUNCTION_BLOCK FB_MesMqtt EXTENDS FB_Listener IMPLEMENTS I_Task
VAR
    fbJsonParser : FB_JsonDomParser();
    fbJson : SJsonValue;

    // The block depends on the interface, not directly on FB_MqttServiceBroker.
    ipServiceBroker : I_ServiceBroker;
END_VAR
```

```pascal title="FB_MesMqtt.FB_init"
METHOD FB_init : BOOL
VAR_INPUT
    bInitRetains : BOOL;
    bInCopyCode : BOOL;
    ipServiceBroker : I_ServiceBroker;
END_VAR

// Keep the service broker for Send() and Receive() calls.
THIS^.ipServiceBroker := ipServiceBroker;

// Run() must be called through the commands task queue.
ServiceLocator.fbTasks.AddTask(Constants.sCommandsTask, THIS^);

// Subscribe to the message types this integration block republishes.
Register(1);
Register(2);
Register(3);
```

## Publish PLC Events

When the listener receives a counter event, it serializes the domain payload and publishes it.

```pascal title="FB_MesMqtt.OnMessage excerpt"
IF ipMessage^.MessageType = 2 THEN
    // Build the JSON payload from the typed PLC event and context.
    sJson := OnCounterChanged(ipMessage, stContext);
END_IF

IF LEN(sJson) > 0 THEN
    // The topic name is the external integration contract.
    ipServiceBroker.Send(sJson, 'industria4');
END_IF
```

```pascal title="FB_MesMqtt.OnCounterChanged excerpt"
stCounterMes.id := THIS^.nCounter;
stCounterMes.context := stContext;

IF __QUERYPOINTER(ipMessage^, fbCounterChangedEventMessage) THEN
    // Copy the domain event value into the outbound DTO.
    stCounterMes.count := UDINT_TO_LINT(fbCounterChangedEventMessage^.Value);
END_IF

// Serialize a PLC structure into JSON using the TwinCAT JSON helper.
OnCounterChanged :=
    fbJsonWriter.GetJsonStringFromSymbol('ST_CounterMes', SIZEOF(stCounterMes), ADR(stCounterMes));
```

## Receive External Commands

The broker boundary reads JSON commands and converts them to PLC messages.

```pascal title="FB_MesMqtt.Run command conversion"
WHILE TRUE DO
    // Receive returns an empty payload when no message is available.
    sPayload := ipServiceBroker.Receive(sTopic => sTopic);

    IF LEN(sPayload) = 0 THEN
        EXIT;
    END_IF

    jsonDoc := fbJsonParser.ParseDocument(sPayload);

    IF fbJsonParser.HasMember(jsonDoc, 'command') THEN
        jsonProp := fbJsonParser.FindMember(jsonDoc, 'command');
        sCommand := fbJsonParser.GetString(jsonProp);

        IF sCommand = 'set' THEN
            // Translate external scalar values to the internal ST_Value contract.
            jsonProp := fbJsonParser.FindMember(jsonDoc, 'type');
            sType := fbJsonParser.GetString(jsonProp);

            jsonProp := fbJsonParser.FindMember(jsonDoc, 'value');

            IF sType = 'string' THEN
                stValue := V_STRING(fbJsonParser.GetString(jsonProp));
            ELSIF sType = 'bool' THEN
                stValue := V_BOOL(fbJsonParser.GetBool(jsonProp));
            ELSIF sType = 'int' THEN
                stValue := V_INT(DINT_TO_INT(fbJsonParser.GetInt(jsonProp)));
            END_IF

            fbSignalCommandMessage := __NEW(FB_SignalCommandMessage(
                iMessageType := -1,
                stTimestamp := ServiceLocator.fbDateTimeOffset.DateTime,
                stValue := stValue));

            ServiceLocator.fbMessenger.Send(THIS, fbSignalCommandMessage);
        END_IF
    END_IF
END_WHILE
```

## External Payload Shape

A `set` command should include a command name, target device, value type, and value.

```json title="set-command.json"
{
  "command": "set",
  "device": "counter-1",
  "type": "int",
  "value": 42
}
```

A `reset` command maps to `FB_CounterResetCommandMessage`.

```json title="reset-command.json"
{
  "command": "reset",
  "device": "counter-1"
}
```

## Operational Notes

- Keep topic names and JSON payloads versioned as integration contracts.
- Convert broker payloads to domain messages immediately at the boundary.
- Run broker receive loops from a task, not from unrelated machine logic.
- Prefer `I_ServiceBroker` in function block constructors so the same logic can be tested with a different broker implementation.
