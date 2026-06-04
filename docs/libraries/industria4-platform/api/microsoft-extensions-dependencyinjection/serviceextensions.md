---
title: "ServiceExtensions"
---

# ServiceExtensions

_public class_

Namespace: `Microsoft.Extensions.DependencyInjection`

Source: `src/Recipes/Recipes.Cqrs.Handlers/ServiceExtensions.cs`

## Summary

Extension methods that register Recipes domain services with the DI container.

## Methods

### AddRecipesServices

_method_

```csharp
IServiceCollection AddRecipesServices(this IServiceCollection services)
```

Registers and as transient services. The service collection to add services to. The same `services` for chaining.

