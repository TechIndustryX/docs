---
title: "MqttSymbolsReader"
---

# MqttSymbolsReader

_public class_

Namespace: `TechIndustry.Streaming.TwinCAT`

Source: `TechIndustry.Streaming.TwinCAT/MqttSymbolsReader.cs`

## Summary

Subscribes to an MQTT live-stream topic published by TwinCAT Analytics and exposes received samples through a bounded .

## Properties

### Configuration

_property_

```csharp
MqttSymbolsReaderConfiguration Configuration
```

Gets the configuration used to create this reader instance.

### Reader

_property_

```csharp
ChannelReader<SymbolValue> Reader
```

Gets the channel reader from which consumers can read incoming samples.

## Methods

### Dispose

_method_

```csharp
void Dispose()
```

Cancels the reader loop and releases MQTT source resources.

### Start

_method_

```csharp
void Start()
```

Connects to the MQTT broker, resolves symbols, and begins writing values to the internal channel.

### Stop

_method_

```csharp
void Stop()
```

Signals the reader loop to stop by cancelling the internal .

