---
title: "ParameterGroup"
---

# ParameterGroup

_public class_

Namespace: `Industria4.Recipes.DomainModel.Model`

Source: `src/Recipes/Recipes.DomainModel/Model/ParameterGroup.cs`

## Summary

Groups a set of parameters under a shared key and sort order.

## Constructors

### ParameterGroup

_constructor_

```csharp
ParameterGroup(string key)
```

Initializes a new parameter group with the given key. The unique key identifying this group within its parent model or recipe.

## Properties

### Descriptions

_property_

```csharp
LanguageDictionary<string> Descriptions
```

Gets the localised descriptions for this group, keyed by language.

### Key

_property_

```csharp
string Key
```

Gets the unique key of this parameter group.

### Parameters

_property_

```csharp
ValidableDictionary<string,ParameterBase> Parameters
```

Gets the dictionary of parameters within this group, keyed by parameter key (case-insensitive).

