---
title: TwinCAT Symbol Reader
---

# TwinCAT Symbol Reader

## Scenario

Read selected TwinCAT symbols from a live MQTT stream and expose them as a .NET channel.

## Source Pattern

`MqttSymbolsReader` builds a TwinCAT Analytics live source from broker, topic and symbol list, then writes each `SymbolValue` to a bounded channel.

## Steps

1. Configure a broker entry.
2. Configure `BaseTopic`, `StreamName` and the symbols to read.
3. Start the reader.
4. Consume values from `Reader`.
5. Handle dropped old values when downstream processing is slower than the stream.

## Expected Result

The application receives normalized timestamp, symbol and value tuples from TwinCAT.

