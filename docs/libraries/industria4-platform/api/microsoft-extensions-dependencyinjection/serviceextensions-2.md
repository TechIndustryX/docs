---
title: "ServiceExtensions"
---

# ServiceExtensions

_public class_

Namespace: `Microsoft.Extensions.DependencyInjection`

Source: `src/Shared/Globalization/ServiceExtensions.cs`

## Summary

Extension methods for registering globalization services with the DI container.

## Methods

### AddGlobalization

_method_

```csharp
IServiceCollection AddGlobalization(this IServiceCollection services)
```

Registers the scoped service required for multi-language support. The service collection. The same `services` instance for chaining.

### AddResourceProvider

_method_

```csharp
IServiceCollection AddResourceProvider(this IServiceCollection services,ResourceManager resourceManager)
```

Registers an singleton backed by the specified `resourceManager`. The service collection. The resource manager to expose. The same `services` instance for chaining.

