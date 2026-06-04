---
title: "LookupValueItem"
---

# LookupValueItem

_public class_

Namespace: `Industria4.Recipes.DomainModel.Model`

Source: `src/Recipes/Recipes.DomainModel/Model/LookupValueParameter.cs`

## Summary

Represents a single allowable value in a .

## Constructors

### LookupValueItem

_constructor_

```csharp
LookupValueItem(LanguageDictionary<string> descriptions,DataValue value)
```

Initializes a new with the given localised descriptions and value. The per-language display descriptions for this item. The data value that represents this item.

## Properties

### Descriptions

_property_

```csharp
LanguageDictionary<string> Descriptions
```

Gets the localised descriptions for this lookup item, keyed by language.

### Value

_property_

```csharp
DataValue Value
```

Gets the data value that represents this lookup item.

