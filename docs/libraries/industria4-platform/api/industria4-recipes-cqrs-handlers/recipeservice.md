---
title: "RecipeService"
---

# RecipeService

_public class_

Namespace: `Industria4.Recipes.Cqrs.Handlers`

Source: `src/Recipes/Recipes.Cqrs.Handlers/RecipeService.cs`

## Summary

Provides domain operations over recipes and their parameter values.

## Constructors

### RecipeService

_constructor_

```csharp
RecipeService(IRepository<Recipe> recipeRepository,IRepository<Model> modelRepository,ModelService modelService)
```

Initializes a new . The repository used to load recipes. The repository used to load models. The service used to flatten model hierarchies.

