---
title: "DependenciesHost"
---

# DependenciesHost

_public class_

Namespace: `Industria4.Web`

Source: `src/Shared/Web/Dependencies.cs`

## Summary

IWebHost implementation which wraps another one and checks dependencies before to start the original implementation

## Constructors

### DependenciesHost

_constructor_

```csharp
DependenciesHost(IHost originalHost,DependenciesConfiguration configuration)
```

Initialises a new dependencies host wrapping the original host. The underlying host to start after all dependency checks pass. The dependency configuration with registered checkers.

## Properties

### Services

_property_

```csharp
IServiceProvider Services
```

## Methods

### Dispose

_method_

```csharp
void Dispose()
```

### StartAsync

_method_

```csharp
Task StartAsync(CancellationToken cancellationToken = default(CancellationToken)
```

### StopAsync

_method_

```csharp
Task StopAsync(CancellationToken cancellationToken = default(CancellationToken)
```

