---
title: "CacheOptions"
---

# CacheOptions

_public class_

Namespace: `Industria4.Caching`

Source: `src/Shared/Caching/CacheOptions.cs`

## Summary

Controls the expiry and backing store for a cache region.

## Properties

### AbsoluteExpiration

_property_

```csharp
TimeSpan? AbsoluteExpiration
```

Gets or sets an absolute expiration relative to now, after which a cached entry is evicted. `null` means no absolute expiry.

### Cache

_property_

```csharp
IMemoryCache Cache
```

Gets or sets an explicit instance to use. When `null` the default instance is used.

### SlidingExpiration

_property_

```csharp
TimeSpan? SlidingExpiration
```

Gets or sets a sliding expiration; the entry is evicted if not accessed within this window. Defaults to 1 minute.

