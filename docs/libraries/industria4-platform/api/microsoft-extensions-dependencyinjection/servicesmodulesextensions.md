---
title: "ServicesModulesExtensions"
---

# ServicesModulesExtensions

_public class_

Namespace: `Microsoft.Extensions.DependencyInjection`

Source: `src/Shared/Hosting/Modules/ServicesModulesExtensions.cs`

## Summary

Extension methods for that register implementations.

## Methods

### AddModule

_method_

```csharp
IServiceCollection AddModule<T>(this IServiceCollection services,ICatalogContextAccessor catalogContextAccessor)
```

Registers `T` as a scoped service and maps it to all its module interfaces, injecting the catalog context. The module type to register. The service collection to add to. Provides the catalog context to inject into the module instance, or `null`. The same so that calls can be chained.

### AddModule

_method_

```csharp
IServiceCollection AddModule<T>(this IServiceCollection services)
```

Registers `T` as a scoped service and maps it to all its module interfaces with no catalog context. The module type to register. The service collection to add to. The same so that calls can be chained.

