---
title: "ProxyCacheFactory"
---

# ProxyCacheFactory

_public class_

Namespace: `Industria4.Caching.Implementations`

Source: `src/Shared/Caching/Implementations/ProxyCacheFactory.cs`

## Summary

Implementation of that builds Castle DynamicProxy-based caching proxies.

## Constructors

### ProxyCacheFactory

_constructor_

```csharp
ProxyCacheFactory(IServiceProvider serviceProvider,ILogger<ProxyCacheFactory> logger,IMemoryCache cache,IOptions<CacheOptions> options)
```

Initialises a new instance, wiring up the common interceptors and verifying required dependencies. The DI service provider used to resolve target services. Logger for diagnostics. The in-memory cache backing the proxies. The cache options.

## Properties

### ServiceProvider

_property_

```csharp
IServiceProvider ServiceProvider
```

## Methods

### Get

_method_

```csharp
object Get(Type type,ICacheConfiguration configuration)
```

