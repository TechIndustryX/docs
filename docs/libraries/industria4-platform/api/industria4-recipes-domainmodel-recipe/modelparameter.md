---
title: "ModelParameter"
---

# ModelParameter

_public class_

Namespace: `Industria4.Recipes.DomainModel.Recipe`

Source: `src/Recipes/Recipes.DomainModel/Recipe/ModelParameter.cs`

## Summary

A recipe parameter that holds nested parameter groups for each element of an array model parameter.

## Properties

### ParametersGroups

_property_

```csharp
IReadOnlyList<ValidableList<ParameterGroup>> ParametersGroups
```

Gets the read-only list of parameter group lists (one per array element).

## Methods

### AddElement

_method_

```csharp
ValidableList<ParameterGroup> AddElement()
```

Adds a new element (a new set of parameter groups) to this model parameter and returns the new group list. The new of for the added element.

