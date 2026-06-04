---
title: "ModelParameter"
---

# ModelParameter

_public class_

Namespace: `Industria4.Recipes.Cqrs.Commands.Recipe`

Source: `src/Recipes/Recipes.Cqrs/Commands/Recipe/Parameter.cs`

## Summary

Recipe parameter value DTO that holds nested parameter groups for each element of an array model parameter.

## Constructors

### ModelParameter

_constructor_

```csharp
ModelParameter(string notes,ParameterGroup[][] parametersGroups)
```

Initializes a new model parameter DTO. Optional notes. Jagged array of parameter groups (one per array element, each with one group per model parameter group).

## Properties

### ParametersGroups

_property_

```csharp
ParameterGroup[][] ParametersGroups
```

Gets the jagged array of parameter groups for each array element.

