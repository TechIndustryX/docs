---
title: "CacheMemberConfiguration"
---

# CacheMemberConfiguration

_public class_

Namespace: `Industria4.Caching`

Source: `src/Shared/Caching/CacheMemberConfiguration.cs`

## Summary

Holds the caching behaviour (expiry, key factories, ignore flag) for a single service member.

## Constructors

### CacheMemberConfiguration

_constructor_

```csharp
CacheMemberConfiguration()
```

Initializes a new instance, pre-registering the default key factories.

## Properties

### CacheActions

_property_

```csharp
IList<Action<CacheMemberCallContext>> CacheActions
```

Gets the list of actions applied to the cache entry context when a cache miss occurs.

### Ignore

_property_

```csharp
bool Ignore
```

Gets or sets a value indicating that caching is disabled for this member.

### KeyFactories

_property_

```csharp
IList<ICacheKeyFactory> KeyFactories
```

Gets the ordered list of key factories used to build the cache key for this member.

## Methods

### ApplyActions

_method_

```csharp
void ApplyActions(CacheMemberCallContext context)
```

Invokes all registered with the given context. The context carrying the current cache entry and invocation details.

