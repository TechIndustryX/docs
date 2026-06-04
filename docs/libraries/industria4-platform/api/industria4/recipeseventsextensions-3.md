---
title: "RecipesEventsExtensions"
---

# RecipesEventsExtensions

_public class_

Namespace: `Industria4`

Source: `src/Recipes/Recipes.Cqrs.Handlers/RecipesEvents.cs`

## Summary

Extension methods for accessing Recipes-scoped event IDs.

## Methods

### ParameterNodeNotUnique

_method_

```csharp
EventId ParameterNodeNotUnique(this IAvailableEntityEvents<ModelType> availableEvents)
```

Returns the event ID indicating that a parameter OPC-UA node ID is not unique across model parameters.

### Recipes

_method_

```csharp
RecipesEvents Recipes(this IAvailableEvents availableEvents)
```

Returns the accessor for Recipes-scoped event IDs.

