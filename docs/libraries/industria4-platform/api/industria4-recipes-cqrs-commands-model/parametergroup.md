---
title: "ParameterGroup"
---

# ParameterGroup

_public class_

Namespace: `Industria4.Recipes.Cqrs.Commands.Model`

Source: `src/Recipes/Recipes.Cqrs/Commands/Model/ParameterGroup.cs`

## Summary

A group of parameter definitions within a recipe model, identified by a unique key.

## Properties

### Descriptions

_property_

```csharp
LanguageDictionary<string> Descriptions
```

Gets the localised descriptions for this group.

### Key

_property_

```csharp
string Key
```

Gets or sets the unique key identifying this group.

### Parameters

_property_

```csharp
Dictionary<string,ParameterBase> Parameters
```

Gets the parameter definitions in this group, keyed by parameter ID.

### SortIndex

_property_

```csharp
int SortIndex
```

Gets the display sort order index.

