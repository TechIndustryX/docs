---
title: "CacheConfigurationBuilder<T>"
---

# CacheConfigurationBuilder&lt;T&gt;

_public class_

Namespace: `Industria4.Caching.Implementations`

Source: `src/Shared/Caching/Implementations/CacheConfigurationBuilder.cs`

## Summary

Typed implementation of that accumulates per-member configurations and builds an . The service type being configured.

## Constructors

### CacheConfigurationBuilder

_constructor_

```csharp
CacheConfigurationBuilder(IServiceProvider serviceProvider,IOptions<CacheOptions> options)
```

Initialises a new instance with the given service provider and cache options. The DI service provider. The cache options.

## Methods

### Build

_method_

```csharp
ICacheConfiguration<T> Build()
```

### ForAllMembers

_method_

```csharp
ICacheConfigurationBuilder<T> ForAllMembers(Action<ICacheConfigurationMemberBuilder<T>> configure)
```

### ForGenericMember

_method_

```csharp
ICacheConfigurationBuilder<T> ForGenericMember<TValue>(Expression<Func<T,TValue>> memberExpression,Action<ICacheConfigurationMemberBuilder<T>> configure)
```

### ForMember

_method_

```csharp
ICacheConfigurationBuilder<T> ForMember<TValue>(Expression<Func<T,TValue>> memberExpression,Action<ICacheConfigurationMemberBuilder<T>> configure)
```

### Ignore

_method_

```csharp
ICacheConfigurationBuilder<T> Ignore<TValue>(Expression<Func<T,TValue>> memberExpression)
```

