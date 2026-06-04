---
title: "LookupValueItem"
---

# LookupValueItem

_public class_

Namespace: `Industria4.Recipes.Cqrs.Commands.Model`

Source: `src/Recipes/Recipes.Cqrs/Commands/Model/Parameter.cs`

## Summary

A single selectable item in a definition.

## Constructors

### LookupValueItem

_constructor_

```csharp
LookupValueItem(LanguageDictionary<string> descriptions,DataValue value)
```

Initializes a new lookup value item. Localised labels shown to the user for this item. The stored data value for this item.

## Properties

### Descriptions

_property_

```csharp
LanguageDictionary<string> Descriptions
```

Gets the localised labels for this item.

### Value

_property_

```csharp
DataValue Value
```

Gets the stored data value for this item.

