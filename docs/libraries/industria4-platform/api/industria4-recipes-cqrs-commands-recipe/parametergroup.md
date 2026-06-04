---
title: "ParameterGroup"
---

# ParameterGroup

_public class_

Namespace: `Industria4.Recipes.Cqrs.Commands.Recipe`

Source: `src/Recipes/Recipes.Cqrs/Commands/Recipe/ParameterGroup.cs`

## Summary

A group of recipe parameter values, scoped to a model and key.

## Constructors

### ParameterGroup

_constructor_

```csharp
ParameterGroup(string modelId,string key,Dictionary<string,ParameterBase> parameters)
```

Initializes a new recipe parameter group. The model identifier this group belongs to. The group key. The parameter values, keyed by parameter definition ID (case-insensitive).

## Properties

### Key

_property_

```csharp
string Key
```

Gets the group key.

### ModelId

_property_

```csharp
string ModelId
```

Gets the identifier of the model this group belongs to.

### Parameters

_property_

```csharp
Dictionary<string,ParameterBase> Parameters
```

Gets the parameter values for this group, keyed by parameter definition ID.

