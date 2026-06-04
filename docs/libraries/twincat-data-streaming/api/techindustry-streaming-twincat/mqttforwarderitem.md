---
title: "MqttForwarderItem"
---

# MqttForwarderItem

_public class_

Namespace: `TechIndustry.Streaming.TwinCAT`

Source: `TechIndustry.Streaming.TwinCAT/MqttForwarder.cs`

## Summary

Represents a single symbol value being prepared for publication to an MQTT topic, including payload and cancellation state.

## Properties

### Cancel

_property_

```csharp
bool Cancel
```

Gets or sets a value indicating whether this item should be silently dropped instead of published.

### JsonPayload

_property_

```csharp
JsonNode? JsonPayload
```

Gets or sets the JSON payload; when a default node is generated via .

### SymbolValue

_property_

```csharp
SymbolValue SymbolValue
```

Gets the original sample from the reader.

### Topic

_property_

```csharp
string Topic
```

Gets or sets the MQTT topic the item will be published to.

## Methods

### CreateDefaultNode

_method_

```csharp
JsonNode CreateDefaultNode()
```

Builds the default JSON payload for this item by serialising using the symbol's type info.

