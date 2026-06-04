---
title: "HttpServiceExtensions"
---

# HttpServiceExtensions

_public class_

Namespace: `Microsoft.Extensions.DependencyInjection`

Source: `src/Recipes/Recipes.Http/HttpServiceExtensions.cs`

## Summary

Extension methods that register the Recipes HTTP clients with the DI container.

## Methods

### AddHttpRecipes

_method_

```csharp
IServiceCollection AddHttpRecipes(this IServiceCollection services)
```

Registers and as transient services. The service collection to add the clients to. The same `services` for chaining.

