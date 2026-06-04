---
title: "HookServiceProviderFactory<T>"
---

# HookServiceProviderFactory&lt;T&gt;

_public class_

Namespace: `Industria4`

Source: `src/Shared/Core/HookServiceProviderFactory.cs`

## Summary

A factory that wraps an existing to produce a . The container builder type used by the inner factory.

## Constructors

### HookServiceProviderFactory

_constructor_

```csharp
HookServiceProviderFactory(IServiceProviderFactory<T> original)
```

Initializes a new instance of wrapping the given factory. The inner service provider factory.

## Methods

### CreateBuilder

_method_

```csharp
T CreateBuilder(IServiceCollection services)
```

Creates a container builder by delegating to the inner factory. The service collection to configure. The container builder.

### CreateServiceProvider

_method_

```csharp
IServiceProvider CreateServiceProvider(T containerBuilder)
```

Creates a that wraps the provider produced by the inner factory. The container builder. A decorating the resolved service provider.

