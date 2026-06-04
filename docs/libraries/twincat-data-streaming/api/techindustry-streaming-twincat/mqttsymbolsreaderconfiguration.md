---
title: "MqttSymbolsReaderConfiguration"
---

# MqttSymbolsReaderConfiguration

_public class_

Namespace: `TechIndustry.Streaming.TwinCAT`

Source: `TechIndustry.Streaming.TwinCAT/MqttSymbolsReaderConfiguration.cs`

## Summary

Configuration for a single that subscribes to an MQTT live stream topic and reads TwinCAT symbol values.

## Properties

### BaseTopic

_property_

```csharp
string BaseTopic
```

Gets or sets the MQTT base topic prefix. Combined with to form .

### DataTimeout

_property_

```csharp
TimeSpan DataTimeout
```

Gets or sets the timeout for receiving data after the stream has started. Defaults to 10 seconds.

### FullTopic

_property_

```csharp
string FullTopic
```

Gets the fully qualified MQTT topic (`BaseTopic/StreamName`) the reader subscribes to.

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

Gets or sets the minimum sort-queue depth used for timestamp ordering. Defaults to `0`.

### MqttBroker

_property_

```csharp
MqttBroker MqttBroker
```

Gets the MQTT broker connection parameters used by this reader.

### StreamName

_property_

```csharp
string StreamName
```

Gets the stream name, which also forms the last segment of .

### Symbols

_property_

```csharp
List<string> Symbols
```

Gets the list of TwinCAT symbol paths this reader subscribes to.

### SymbolTimeout

_property_

```csharp
TimeSpan SymbolTimeout
```

Gets or sets the timeout for receiving the initial symbol metadata. Defaults to 10 seconds.

