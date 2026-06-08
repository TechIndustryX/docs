---
title: PLC MQTT Client And Broker
---

# PLC MQTT Client And Broker

## Scenario

Use `FB_MqttServiceBroker` when PLC code needs to exchange messages with MQTT while keeping domain blocks independent from the Beckhoff `FB_IotMqttClient` API.

`FB_MqttServiceBroker` wraps `FB_IotMqttClient` and exposes `I_ServiceBroker`. Application blocks should depend on `I_ServiceBroker`; the `EVENTS` program or a composition block should configure the concrete MQTT client.

## Configure The MQTT Client

The sample `EVENTS` program creates the Beckhoff client, wraps it with the service broker, subscribes to a command topic, and runs the generic task.

```pascal title="EVENTS declaration"
PROGRAM EVENTS
VAR
    fbMqttClient : FB_IotMqttClient;
    bSetParameter : BOOL := TRUE;

    // TechIndustry broker around the Beckhoff MQTT client.
    fbServiceBroker : FB_MqttServiceBroker(fbMqttClient := ADR(fbMqttClient));
    ipServiceBroker : I_ServiceBroker := fbServiceBroker;

    // Domain integration block depends on the broker interface.
    fbMes : FB_MesMqtt(ipServiceBroker := fbServiceBroker);

    bReady : BOOL := FALSE;
END_VAR
```

```pascal title="EVENTS execution"
IF bSetParameter THEN
    bSetParameter := FALSE;

    // Configure the concrete Beckhoff MQTT client once.
    fbMqttClient.sHostName := 'test.mosquitto.org';
    fbMqttClient.nHostPort := 1883;
    fbMqttClient.sTopicPrefix := 'ricciolo/messages/';

    // Configure broker publishing behavior.
    fbServiceBroker.QoS := TcIotMqttQos.AtLeastOnceDelivery;

    // Subscribe requests are completed by FB_MqttServiceBroker.Run().
    fbServiceBroker.Subscribe(
        sTopic := 'industria4-commands',
        eQoS := TcIotMqttQos.AtLeastOnceDelivery);
END_IF

// Required: runs FB_MqttServiceBroker.Run(), including client Execute().
ServiceLocator.fbTasks.Run(TechIndustry_TwinCAT_IoTCore.Constants.sGenericTask);

IF NOT bReady THEN
    bReady := fbServiceBroker.Ready;
END_IF
```

## Broker Responsibilities

`FB_MqttServiceBroker` handles:

- `fbMqttClient.Execute(bConnect)` every generic task cycle;
- subscription and unsubscription retries;
- `Send()` and `SendDynamic()` publish calls;
- `Receive()` and `ReceiveDynamic()` from `FB_IotMqttMessageQueue`;
- QoS through `QoS`;
- retained messages through `Store`;
- cleanup of dynamic `FB_MqttSubscription` objects in `FB_exit`.

## Inject The Broker

The sample `FB_MesMqtt` receives `I_ServiceBroker` in `FB_init`, stores it, and registers itself as a command task.

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

// Keep the broker dependency for Send() and Receive().
THIS^.ipServiceBroker := ipServiceBroker;

// Run() receives MQTT payloads and converts them to commands.
ServiceLocator.fbTasks.AddTask(Constants.sCommandsTask, THIS^);

// Listen to PLC events that must be published externally.
Register(1);
Register(2);
Register(3);
```

## Publish A PLC Event

When the listener receives a counter event, it serializes the typed PLC event and publishes it to MQTT.

```pascal title="FB_MesMqtt.OnMessage excerpt"
IF ipMessage^.MessageType = 2 THEN
    // Build the external JSON contract from a typed PLC event.
    sJson := OnCounterChanged(ipMessage, stContext);
END_IF

IF LEN(sJson) > 0 THEN
    // Topic names are integration contracts; keep them stable.
    ipServiceBroker.Send(sJson, 'industria4');
END_IF
```

```pascal title="FB_MesMqtt.OnCounterChanged excerpt"
stCounterMes.id := THIS^.nCounter;
stCounterMes.context := stContext;

IF __QUERYPOINTER(ipMessage^, fbCounterChangedEventMessage) THEN
    // Copy the domain value into the outbound DTO.
    stCounterMes.count := UDINT_TO_LINT(fbCounterChangedEventMessage^.Value);
END_IF

// Serialize the PLC structure to JSON.
OnCounterChanged :=
    fbJsonWriter.GetJsonStringFromSymbol('ST_CounterMes', SIZEOF(stCounterMes), ADR(stCounterMes));
```

## Publish A Dynamic Payload

Use `SendDynamic()` when the payload is already stored in caller-owned memory or is larger than a fixed string buffer.

```pascal title="Dynamic MQTT publish"
VAR
    aPayload : ARRAY[0..2047] OF BYTE;
    nPayloadSize : UDINT;
    sTopic : STRING(255) := 'industria4/binary';
END_VAR

// Fill aPayload and nPayloadSize before publishing.
ipServiceBroker.SendDynamic(
    pPayload := ADR(aPayload),
    nPayloadSize := nPayloadSize,
    sTopic := sTopic);
```

## Receive External Commands

The broker boundary reads MQTT payloads, parses JSON, converts values to `ST_Value`, and sends command messages into the PLC messenger.

```pascal title="FB_MesMqtt.Run command conversion"
WHILE TRUE DO
    // Receive returns an empty payload when no MQTT message is available.
    sPayload := ipServiceBroker.Receive(sTopic => sTopic);

    IF LEN(sPayload) = 0 THEN
        EXIT;
    END_IF

    jsonDoc := fbJsonParser.ParseDocument(sPayload);

    IF fbJsonParser.HasMember(jsonDoc, 'command') THEN
        jsonProp := fbJsonParser.FindMember(jsonDoc, 'command');
        sCommand := fbJsonParser.GetString(jsonProp);

        IF sCommand = 'set' THEN
            jsonProp := fbJsonParser.FindMember(jsonDoc, 'type');
            sType := fbJsonParser.GetString(jsonProp);

            jsonProp := fbJsonParser.FindMember(jsonDoc, 'value');

            // Convert the external scalar into the internal typed value contract.
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
        ELSIF sCommand = 'reset' THEN
            fbCounterResetCommandMessage := __NEW(FB_CounterResetCommandMessage(
                iMessageType := -2,
                stTimestamp := ServiceLocator.fbDateTimeOffset.DateTime,
                sDevice := sDevice));

            ServiceLocator.fbMessenger.Send(THIS, fbCounterResetCommandMessage);
        END_IF
    END_IF
END_WHILE
```

## Receive A Dynamic Payload

```pascal title="Dynamic MQTT receive"
VAR
    aPayload : ARRAY[0..2047] OF BYTE;
    sTopic : STRING(255);
    bReceived : BOOL;
END_VAR

bReceived := ipServiceBroker.ReceiveDynamic(
    pPayload := ADR(aPayload),
    nPayloadSize := SIZEOF(aPayload),
    sTopic => sTopic);

IF bReceived THEN
    // Decode aPayload according to the topic contract.
END_IF
```

## External Payload Shape

A `set` command should include command name, target device, value type, and value.

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

- Configure `FB_IotMqttClient` once in the composition program.
- Depend on `I_ServiceBroker` inside domain blocks.
- Run `Constants.sGenericTask`; otherwise connection, publish, subscribe, and unsubscribe state will not progress.
- Run broker receive loops from a task, not from unrelated machine logic.
- Convert MQTT payloads to domain messages immediately at the boundary.
- Keep topic names and JSON payloads versioned as integration contracts.
- Use `Store := TRUE` only when retained MQTT messages are part of the contract.
