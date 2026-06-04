---
title: "UnitSet"
---

# UnitSet

_public class_

Namespace: `Industria4.Globalization.DomainModel.Units`

Source: `src/Globalization/Globalization.DomainModel/Units/UnitSet.cs`

## Summary

A named set of units with a mapping from external unit identifiers to internal unit IDs.

## Constructors

### UnitSet

_constructor_

```csharp
UnitSet(string id)
```

Initializes a new unit set with the given identifier. The unique identifier.

## Properties

### Descriptions

_property_

```csharp
LanguageDictionary<string> Descriptions
```

Gets the localised descriptions for this unit set, keyed by language.

### Id

_property_

```csharp
string Id
```

### UnitsMapping

_property_

```csharp
Dictionary<string,string> UnitsMapping
```

Gets the mapping of external unit identifiers (case-insensitive) to internal unit IDs.

