---
title: "CqrsExtensions"
---

# CqrsExtensions

_public class_

Namespace: `Industria4.Cqrs`

Source: `src/Recipes/Recipes.Cqrs.Handlers/CqrsExtensions.cs`

## Summary

Extension methods that register Recipes CQRS handlers with an .

## Methods

### AddRecipesHandlers

_method_

```csharp
ICqrsConfigurer AddRecipesHandlers(this ICqrsConfigurer configurer)
```

Registers all command and event handlers defined in the Recipes.Cqrs.Handlers assembly. The CQRS configurer to register handlers with. The same `configurer` for chaining.

