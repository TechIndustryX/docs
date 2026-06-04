---
title: "SymbolValue"
---

# SymbolValue

_public record_

Namespace: `TechIndustry.Streaming.TwinCAT`

Source: `TechIndustry.Streaming.TwinCAT/SymbolValue.cs`

## Summary

Represents a single timestamped value sample read from a TwinCAT symbol via an MQTT live stream.

## Properties

### Date

_property_

```csharp
DateTimeOffset Date
```

Record parameter on SymbolValue.

### SymbolDefinition

_property_

```csharp
ISymbolDefinition SymbolDefinition
```

Record parameter on SymbolValue.

### Value

_property_

```csharp
object Value
```

Record parameter on SymbolValue.

