---
title: "CacheFactoryExtensions"
---

# CacheFactoryExtensions

_public class_

Namespace: `Industria4.Caching`

Source: `src/Shared/Caching/CacheFactoryExtensions.cs`

## Summary

Extension methods for that add strongly-typed helpers and a convenient lambda-based key factory.

## Methods

### AddKeyFactory

_method_

```csharp
ICacheConfigurationMemberBuilder<T> AddKeyFactory<T>(this ICacheConfigurationMemberBuilder<T> builder,Func<IMemberInvocation,object> func)
```

Appends a key factory defined by a lambda that produces a key value from the member invocation. The service type being configured. The member builder to extend. A function that derives a key from , or returns `null` to skip. The same builder for fluent chaining.

### Get

_method_

```csharp
T Get<T>(this ICacheFactory cacheFactory,ICacheConfiguration<T> configuration)
```

Returns a cached proxy for `T` using the provided `configuration`. The service type to proxy. The cache factory to extend. The cache configuration to apply. A cached proxy of type `T`.

### Get

_method_

```csharp
T Get<T>(this ICacheFactory cacheFactory)
```

Returns a cached proxy for `T` using the registered . The service type to proxy. The cache factory to extend. A cached proxy of type `T`.

