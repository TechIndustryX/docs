---
title: "CacheProxy<T>"
---

# CacheProxy&lt;T&gt;

_public class_

Namespace: `Industria4.Caching.Implementations`

Source: `src/Shared/Caching/Implementations/CacheProxy.cs`

## Summary

Default implementation of that retrieves the cached service on construction. The proxied service type.

## Constructors

### CacheProxy

_constructor_

```csharp
CacheProxy(ICacheFactory cacheFactory)
```

Initialises a new instance by obtaining a cached proxy from the given factory. The factory used to build the cached proxy.

## Properties

### Value

_property_

```csharp
T Value
```

