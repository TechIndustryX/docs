---
title: "CacheMemberCallContext"
---

# CacheMemberCallContext

_public class_

Namespace: `Industria4.Caching`

Source: `src/Shared/Caching/CacheMemberConfiguration.cs`

## Summary

Carries the cache entry, member configuration, and invocation data passed to cache-action callbacks.

## Constructors

### CacheMemberCallContext

_constructor_

```csharp
CacheMemberCallContext(ICacheEntry entry,CacheMemberConfiguration memberConfiguration,IMemberInvocation memberInvocation)
```

Initializes a new instance with all required context values. The cache entry. Must not be `null`. The member configuration. Must not be `null`. The invocation. Must not be `null`.

## Properties

### Entry

_property_

```csharp
ICacheEntry Entry
```

Gets the cache entry being configured.

### MemberConfiguration

_property_

```csharp
CacheMemberConfiguration MemberConfiguration
```

Gets the member configuration that triggered this context.

### MemberInvocation

_property_

```csharp
IMemberInvocation MemberInvocation
```

Gets the intercepted member invocation.

