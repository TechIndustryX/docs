---
title: "LookupValueParameter"
---

# LookupValueParameter

_public class_

Namespace: `Industria4.Recipes.DomainModel.Model`

Source: `src/Recipes/Recipes.DomainModel/Model/LookupValueParameter.cs`

## Summary

A recipe model parameter whose value must be chosen from a fixed list of allowable items.

## Constructors

### LookupValueParameter

_constructor_

```csharp
LookupValueParameter()
```

Initializes a new empty .

### LookupValueParameter

_constructor_

```csharp
LookupValueParameter(LookupValueItem[] values)
```

Initializes a new pre-populated with the given lookup items. The initial set of allowable values.

## Properties

### Values

_property_

```csharp
IReadOnlyList<LookupValueItem> Values
```

Gets the ordered list of allowable lookup items for this parameter.

## Methods

### AddValue

_method_

```csharp
LookupValueItem AddValue(LanguageDictionary<string> descriptions,DataValue value)
```

Adds a new lookup item with a localised description dictionary. The per-language descriptions for the item. The data value associated with the item. The newly created .

### AddValue

_method_

```csharp
LookupValueItem AddValue(string description,DataValue value)
```

Adds a new lookup item using a single-language description string. The human-readable description for the item. The data value associated with the item. The newly created .

### Set

_method_

```csharp
void Set(DataType type,DataValue defaultValue,IEnumerable<KeyValuePair<LanguageDictionary<string>,DataValue>> values)
```

Sets this parameter's type, clears all existing items, and adds items from `values`; also updates . The data type for the parameter. The preferred default value; falls back to the first item when not present in `values`. The new set of allowable items, each as a localised description mapped to its value.

