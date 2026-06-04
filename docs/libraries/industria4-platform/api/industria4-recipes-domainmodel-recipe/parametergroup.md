---
title: "ParameterGroup"
---

# ParameterGroup

_public class_

Namespace: `Industria4.Recipes.DomainModel.Recipe`

Source: `src/Recipes/Recipes.DomainModel/Recipe/ParameterGroup.cs`

## Summary

A group of parameter values within a recipe, scoped to a specific model and key.

## Constructors

### ParameterGroup

_constructor_

```csharp
ParameterGroup(string modelId,string key)
```

Initializes a new parameter group for the given model and key. The identifier of the model that owns the parameter group definition. The unique key identifying this group within the recipe.

## Properties

### Key

_property_

```csharp
string Key
```

Equipment.ParameterGroupKey

### ModelId

_property_

```csharp
string ModelId
```

Gets the model id associated

### Parameters

_property_

```csharp
ValidableDictionary<string,ParameterBase> Parameters
```

key = ParameterDefinitionId

