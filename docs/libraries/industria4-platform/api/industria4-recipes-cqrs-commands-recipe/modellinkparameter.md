---
title: "ModelLinkParameter"
---

# ModelLinkParameter

_public class_

Namespace: `Industria4.Recipes.Cqrs.Commands.Recipe`

Source: `src/Recipes/Recipes.Cqrs/Commands/Recipe/Parameter.cs`

## Summary

Recipe parameter value DTO that references a linked recipe by ID.

## Constructors

### ModelLinkParameter

_constructor_

```csharp
ModelLinkParameter(string notes,string recipeId)
```

Initializes a new model-link parameter DTO. Optional notes. The identifier of the linked recipe.

## Properties

### RecipeId

_property_

```csharp
string RecipeId
```

Gets the identifier of the linked recipe.

