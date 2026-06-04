---
title: "CacheConfiguration<T>"
---

# CacheConfiguration&lt;T&gt;

_public class_

Namespace: `Industria4.Caching.Implementations`

Source: `src/Shared/Caching/Implementations/CacheConfiguration.cs`

## Summary

Typed implementation of that holds per-member configurations and creates interceptors on demand. The service type being cached.

## Constructors

### CacheConfiguration

_constructor_

```csharp
CacheConfiguration(IOptions<CacheOptions> options)
```

Initialises a new instance with the given cache options. The cache options providing the backing memory cache.

## Properties

### Members

_property_

```csharp
IDictionary<MemberInfo,CacheMemberConfiguration> Members
```

## Methods

### GetInterceptors

_method_

```csharp
IInterceptor[] GetInterceptors(IInterceptor[] commonInterceptors)
```

