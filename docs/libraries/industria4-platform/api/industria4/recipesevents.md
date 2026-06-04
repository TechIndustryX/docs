---
title: "RecipesEvents"
---

# RecipesEvents

_public class_

Namespace: `Industria4`

Source: `src/Recipes/Recipes.Cqrs.Handlers/RecipesEvents.cs`

## Summary

Provides categorised event-ID ranges for Recipes entities.

## Properties

### Model

_property_

```csharp
IAvailableEntityEvents<ModelType> Model
```

Gets the event-ID accessor for model events (base offset 1 000).

### Recipe

_property_

```csharp
IAvailableEntityEvents<RecipeType> Recipe
```

Gets the event-ID accessor for recipe events (base offset 2 000).

