---
title: "TechIndustry.Streaming.TwinCAT"
---

# TechIndustry.Streaming.TwinCAT

This namespace contains 16 public API types.

## Types

- [MqttBroker](./mqttbroker.md) _class_ - Holds the connection parameters for a single MQTT broker.
- [MqttBrokerItemOptions](./mqttbrokeritemoptions.md) _class_ - Configuration for a single MQTT broker connection entry referenced by name from other options.
- [MqttBrokerOptions](./mqttbrokeroptions.md) _class_ - Named dictionary of keyed by broker name.
- [MqttForwarder](./mqttforwarder.md) _class_ - Forwards samples from one or more channel readers to an MQTT broker, applying optional batching, compression, and a Roslyn C# script for payload customisation.
- [MqttForwarderCustomGlobals](./mqttforwardercustomglobals.md) _class_ - Global variables object passed to a custom Roslyn script when a is being processed.
- [MqttForwarderCustomOptions](./mqttforwardercustomoptions.md) _class_ - Options for a custom Roslyn C# script that intercepts and transforms each before publishing.
- [MqttForwarderItem](./mqttforwarderitem.md) _class_ - Represents a single symbol value being prepared for publication to an MQTT topic, including payload and cancellation state.
- [MqttForwarderItemCompression](./mqttforwarderitemcompression.md) _enum_ - Specifies the compression algorithm applied to MQTT message payloads.
- [MqttForwarderItemOptions](./mqttforwarderitemoptions.md) _class_ - Configuration for a single MQTT forwarder item that maps a set of symbol readers to a topic on a broker.
- [MqttForwarderOptions](./mqttforwarderoptions.md) _class_ - Collection of that configures how symbol values are published to MQTT brokers.
- [MqttSymbolsReader](./mqttsymbolsreader.md) _class_ - Subscribes to an MQTT live-stream topic published by TwinCAT Analytics and exposes received samples through a bounded .
- [MqttSymbolsReaderConfiguration](./mqttsymbolsreaderconfiguration.md) _class_ - Configuration for a single that subscribes to an MQTT live stream topic and reads TwinCAT symbol values.
- [MqttSymbolsReaderItemOptions](./mqttsymbolsreaderitemoptions.md) _class_ - Configuration for a single that subscribes to a TwinCAT MQTT live stream topic.
- [MqttSymbolsReaderOptions](./mqttsymbolsreaderoptions.md) _class_ - Named dictionary of keyed by reader name.
- [StreamingService](./streamingservice.md) _class_ - Hosted service that creates and orchestrates all configured , , and instances based on application options.
- [SymbolValue](./symbolvalue.md) _record_ - Represents a single timestamped value sample read from a TwinCAT symbol via an MQTT live stream.
