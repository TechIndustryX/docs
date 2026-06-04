---
title: "AddOrUpdateUnitSetCommand"
---

# AddOrUpdateUnitSetCommand

_public class_

Namespace: `Industria4.Globalization.Cqrs.Commands.UnitSets`

Source: `src/Globalization/Globalization.Cqrs/Commands/UnitSets/AddOrUpdateUnitSetCommand.cs`

## Summary

Command to create or update a unit-set (a collection of unit mappings).

## Properties

### Descriptions

_property_

```csharp
LanguageDictionary<string> Descriptions
```

Gets the localised descriptions for this unit-set.

### EntityVersion

_property_

```csharp
byte[] EntityVersion
```

Gets the concurrency token for optimistic locking.

### UnitsMapping

_property_

```csharp
Dictionary<string,string> UnitsMapping
```

Gets the mapping of source unit keys to target unit keys.

