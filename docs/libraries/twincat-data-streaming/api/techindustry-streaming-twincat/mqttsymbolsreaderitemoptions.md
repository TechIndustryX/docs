---
title: "MqttSymbolsReaderItemOptions"
---

# MqttSymbolsReaderItemOptions

_public class_

Namespace: `TechIndustry.Streaming.TwinCAT`

Source: `TechIndustry.Streaming.TwinCAT/Options.cs`

## Summary

Configuration for a single that subscribes to a TwinCAT MQTT live stream topic.

## Properties

### BaseTopic

_property_

```csharp
string BaseTopic
```

Gets or sets the MQTT base topic prefix.

### DataTimeout

_property_

```csharp
TimeSpan DataTimeout
```

Gets or sets the timeout for receiving data after the stream has started. Defaults to 10 seconds.

### MaxSortQueueSize

_property_

```csharp
int MaxSortQueueSize
```

Gets or sets the maximum sort-queue depth. Defaults to `5`.

### MinSortQueueSize

_property_

```csharp
int MinSortQueueSize
```

Gets or sets the minimum sort-queue depth for timestamp ordering. Defaults to `0`.

### MqttBroker

_property_

```csharp
string MqttBroker
```

Gets or sets the name of the entry to connect to.

### StreamName

_property_

```csharp
string StreamName
```

Gets or sets the stream name that forms the final segment of the subscribed topic.

### Symbols

_property_

```csharp
List<string> Symbols
```

Gets the list of TwinCAT symbol paths to read from the stream.

### SymbolTimeout

_property_

```csharp
TimeSpan SymbolTimeout
```

Gets or sets the timeout for receiving the initial symbol metadata. Defaults to 10 seconds.

