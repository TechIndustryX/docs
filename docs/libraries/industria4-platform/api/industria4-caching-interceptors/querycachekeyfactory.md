---
title: "QueryCacheKeyFactory"
---

# QueryCacheKeyFactory

_public class_

Namespace: `Industria4.Caching.Interceptors`

Source: `src/Shared/Caching/Interceptors/QueryCacheKeyFactory.cs`

## Summary

that extracts LINQ expression trees from delegate arguments and uses their string representation as a cache key.

## Methods

### TryGetKey

_method_

```csharp
bool TryGetKey(IMemberInvocation invocation,out object key)
```

