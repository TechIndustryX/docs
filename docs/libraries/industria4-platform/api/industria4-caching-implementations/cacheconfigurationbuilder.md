---
title: "CacheConfigurationBuilder"
---

# CacheConfigurationBuilder

_public class_

Namespace: `Industria4.Caching.Implementations`

Source: `src/Shared/Caching/Implementations/CacheConfigurationBuilder.cs`

## Summary

Default implementation of that resolves typed builders from DI.

## Constructors

### CacheConfigurationBuilder

_constructor_

```csharp
CacheConfigurationBuilder(IServiceProvider provider)
```

Initialises a new instance with the given service provider. The DI service provider used to resolve typed builders.

## Methods

### For

_method_

```csharp
ICacheConfigurationBuilder<T> For<T>()
```

