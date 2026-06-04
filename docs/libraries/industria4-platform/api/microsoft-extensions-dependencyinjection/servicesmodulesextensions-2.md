---
title: "ServicesModulesExtensions"
---

# ServicesModulesExtensions

_public class_

Namespace: `Microsoft.Extensions.DependencyInjection`

Source: `src/Shared/Web.Forms/Routing/ServicesRoutingExtensions.cs`

## Summary

Extension methods for that register dynamic route builder providers.

## Methods

### AddDynamicRouteBuilderProvider

_method_

```csharp
IServiceCollection AddDynamicRouteBuilderProvider<T>(this IServiceCollection services)
```

Registers a scoped of type `T`. The concrete provider type. The service collection to configure. The same for chaining.

