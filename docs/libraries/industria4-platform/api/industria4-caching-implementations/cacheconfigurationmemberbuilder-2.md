---
title: "CacheConfigurationMemberBuilder<T>"
---

# CacheConfigurationMemberBuilder&lt;T&gt;

_public class_

Namespace: `Industria4.Caching.Implementations`

Source: `src/Shared/Caching/Implementations/CacheConfigurationMemberBuilder.cs`

## Summary

Typed implementation of for service type `T`. The service type whose member is being configured.

## Constructors

### CacheConfigurationMemberBuilder

_constructor_

```csharp
CacheConfigurationMemberBuilder(IServiceProvider serviceProvider)
```

Initialises a new instance with the given service provider. The DI service provider.

## Properties

### Actions

_property_

```csharp
IList<Action<CacheMemberCallContext>> Actions
```

### Ignored

_property_

```csharp
bool Ignored
```

### Services

_property_

```csharp
IServiceProvider Services
```

## Methods

### AddAction

_method_

```csharp
ICacheConfigurationMemberBuilder<T> AddAction(Action<CacheMemberCallContext> action)
```

### AddKeyFactory

_method_

```csharp
ICacheConfigurationMemberBuilder<T> AddKeyFactory(ICacheKeyFactory keyFactory)
```

### Build

_method_

```csharp
CacheMemberConfiguration Build()
```

### Ignore

_method_

```csharp
ICacheConfigurationMemberBuilder<T> Ignore()
```

### SetAbsoluteExpiration

_method_

```csharp
ICacheConfigurationMemberBuilder<T> SetAbsoluteExpiration(TimeSpan expiration)
```

### SetSlidingExpiration

_method_

```csharp
ICacheConfigurationMemberBuilder<T> SetSlidingExpiration(TimeSpan expiration)
```

