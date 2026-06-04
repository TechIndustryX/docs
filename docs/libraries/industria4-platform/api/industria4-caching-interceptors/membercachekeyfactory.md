---
title: "MemberCacheKeyFactory"
---

# MemberCacheKeyFactory

_public class_

Namespace: `Industria4.Caching.Interceptors`

Source: `src/Shared/Caching/Interceptors/MemberCacheKeyFactory.cs`

## Summary

that builds a cache key from the declaring type and member signature, producing a unique key per method regardless of arguments.

## Methods

### TryGetKey

_method_

```csharp
bool TryGetKey(IMemberInvocation invocation,out object key)
```

