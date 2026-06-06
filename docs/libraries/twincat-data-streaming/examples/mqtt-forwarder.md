---
title: MQTT Forwarder
---

# MQTT Forwarder

## Scenario

Forward symbol values to another MQTT broker, optionally batching, compressing and transforming messages.

## Source Pattern

`MqttForwarder` connects to a target broker, attaches one or more `ChannelReader<SymbolValue>` instances and publishes batches to the configured topic.

## Steps

1. Configure target broker host, port, TLS and credentials.
2. Configure forwarder topic and source readers.
3. Set `BatchSize` and `BatchTimeout`.
4. Choose compression when payload size matters.
5. Add a custom script only when the payload must be reshaped before publishing.

## Expected Result

TwinCAT values are emitted as MQTT payloads suitable for downstream cloud or dashboard consumers.

