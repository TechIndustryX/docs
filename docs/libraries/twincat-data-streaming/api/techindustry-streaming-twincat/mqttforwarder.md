---
title: "MqttForwarder"
---

# MqttForwarder

_public class_

Namespace: `TechIndustry.Streaming.TwinCAT`

Source: `TechIndustry.Streaming.TwinCAT/MqttForwarder.cs`

## Summary

Forwards samples from one or more channel readers to an MQTT broker, applying optional batching, compression, and a Roslyn C# script for payload customisation.

## Properties

### MqttBroker

_property_

```csharp
MqttBroker MqttBroker
```

Gets the MQTT broker this forwarder publishes to.

### Topic

_property_

```csharp
string Topic
```

Gets the MQTT topic that messages are published under.

## Methods

### AddReader

_method_

```csharp
void AddReader(ChannelReader<SymbolValue> reader)
```

Attaches `reader` to this forwarder so its values are published to the MQTT topic. The channel reader to subscribe from.

### RemoveReader

_method_

```csharp
void RemoveReader(ChannelReader<SymbolValue> reader)
```

Detaches `reader` and stops forwarding its values. The channel reader to unsubscribe.

### StartAsync

_method_

```csharp
Task StartAsync()
```

Connects to the MQTT broker and starts processing; must be called before adding readers.

