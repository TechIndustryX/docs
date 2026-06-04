---
title: "Unit"
---

# Unit

_public class_

Namespace: `Industria4.Globalization.DomainModel.Units`

Source: `src/Globalization/Globalization.DomainModel/Units/Unit.cs`

## Summary

Represents a measurement unit with a conversion coefficient and display format.

## Constructors

### Unit

_constructor_

```csharp
Unit(string id,string description)
```

Initializes a new unit with an ID, a default description, coefficient 1, and format "0". The unique identifier. The default (single-language) description for this unit.

### Unit

_constructor_

```csharp
Unit(string id)
```

Initializes a new unit with only an ID. The unique identifier.

## Properties

### Descriptions

_property_

```csharp
LanguageDictionary<string> Descriptions
```

Gets the localised descriptions for this unit, keyed by language.

### Id

_property_

```csharp
string Id
```

