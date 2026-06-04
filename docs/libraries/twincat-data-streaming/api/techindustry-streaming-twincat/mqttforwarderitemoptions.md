---
title: "MqttForwarderItemOptions"
---

# MqttForwarderItemOptions

_public class_

Namespace: `TechIndustry.Streaming.TwinCAT`

Source: `TechIndustry.Streaming.TwinCAT/Options.cs`

## Summary

Configuration for a single MQTT forwarder item that maps a set of symbol readers to a topic on a broker.

## Properties

### BatchSize

_property_

```csharp
int BatchSize
```

Gets or sets the maximum number of messages batched together before publishing. Defaults to `1` (no batching).

### BatchTimeout

_property_

```csharp
TimeSpan BatchTimeout
```

Gets or sets the maximum time a partial batch is held before being flushed. Defaults to 15 seconds.

### Compression

_property_

```csharp
MqttForwarderItemCompression Compression
```

Gets or sets the compression algorithm applied to message payloads. Defaults to .

### Custom

_property_

```csharp
MqttForwarderCustomOptions Custom
```

Gets or sets the optional Roslyn C# script customisation settings applied to each message before publishing.

### MqttBroker

_property_

```csharp
string MqttBroker
```

Gets or sets the name of the entry to use as the target broker.

### MqttSymbolReaders

_property_

```csharp
List<string> MqttSymbolReaders
```

Gets the list of entry names whose values this forwarder relays.

### Topic

_property_

```csharp
string Topic
```

Gets or sets the MQTT topic to publish values to.

