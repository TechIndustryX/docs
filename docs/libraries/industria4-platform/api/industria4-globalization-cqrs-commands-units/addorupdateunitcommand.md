---
title: "AddOrUpdateUnitCommand"
---

# AddOrUpdateUnitCommand

_public class_

Namespace: `Industria4.Globalization.Cqrs.Commands.Units`

Source: `src/Globalization/Globalization.Cqrs/Commands/Units/AddOrUpdateUnitCommand.cs`

## Summary

Command to create or update a unit of measure.

## Properties

### Coefficient

_property_

```csharp
float Coefficient
```

Gets the conversion coefficient relative to the base unit.

### Descriptions

_property_

```csharp
LanguageDictionary<string> Descriptions
```

Gets the localised descriptions for this unit.

### EntityVersion

_property_

```csharp
byte[] EntityVersion
```

Gets the concurrency token for optimistic locking.

### Format

_property_

```csharp
string Format
```

Gets the optional display format string.

