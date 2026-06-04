---
title: "CacheInterceptor"
---

# CacheInterceptor

_public class_

Namespace: `Industria4.Caching.Interceptors`

Source: `src/Shared/Caching/Interceptors/CacheInterceptor.cs`

## Summary

Castle DynamicProxy interceptor that intercepts member calls and serves results from an .

## Constructors

### CacheInterceptor

_constructor_

```csharp
CacheInterceptor(IMemoryCache memoryCache,ICacheConfiguration cacheConfiguration)
```

Initialises a new instance with the given memory cache and cache configuration. The memory cache to read from and write to. The per-member configuration that governs caching behaviour.

## Methods

### Intercept

_method_

```csharp
void Intercept(IInvocation invocation)
```

