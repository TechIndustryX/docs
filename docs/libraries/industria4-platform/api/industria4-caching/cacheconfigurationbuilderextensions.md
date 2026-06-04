---
title: "CacheConfigurationBuilderExtensions"
---

# CacheConfigurationBuilderExtensions

_public class_

Namespace: `Industria4.Caching`

Source: `src/Shared/Caching/CacheConfigurationBuilderExtensions.cs`

## Summary

Extension methods that add convenience overloads to .

## Methods

### ForAllMembers

_method_

```csharp
ICacheConfigurationBuilder<T> ForAllMembers<T>(this ICacheConfigurationBuilder<T> builder)
```

Applies default options to all members

### ForGenericMember

_method_

```csharp
ICacheConfigurationBuilder<T> ForGenericMember<T,TValue>(this ICacheConfigurationBuilder<T> builder,Expression<Func<T,TValue>> memberExpression)
```

Applies default options to the generic member

### ForMember

_method_

```csharp
ICacheConfigurationBuilder<T> ForMember<T,TValue>(this ICacheConfigurationBuilder<T> builder,Expression<Func<T,TValue>> memberExpression)
```

Applies default options to the specified member

