---
title: "CachingServiceExtensions"
---

# CachingServiceExtensions

_public class_

Namespace: `Microsoft.Extensions.DependencyInjection`

Source: `src/Shared/Caching/CachingServiceExtensions.cs`

## Summary

Extension methods for that register the caching infrastructure.

## Methods

### AddCaching

_method_

```csharp
IServiceCollection AddCaching(this IServiceCollection services,Action<CacheOptions> options)
```

Registers the caching infrastructure, applying the optional `options` callback. The service collection to add to. Optional callback to configure . The same for chaining.

### AddCaching

_method_

```csharp
IServiceCollection AddCaching(this IServiceCollection services)
```

Registers the caching infrastructure with default options. The service collection to add to. The same for chaining.

### ConfigureCaching

_method_

```csharp
IServiceCollection ConfigureCaching<T>(this IServiceCollection services,Action<ICacheConfigurationBuilder<T>> configure)
```

Registers an singleton for `T`, applying the optional `configure` callback. The service type to configure. The service collection to add to. Optional callback that customises the builder before it is built. The same for chaining.

### ConfigureCaching

_method_

```csharp
IServiceCollection ConfigureCaching<T>(this IServiceCollection services)
```

Registers an singleton for `T` using the default builder options. The service type to configure. The service collection to add to. The same for chaining.

