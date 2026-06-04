---
title: "DependenciesConfiguration"
---

# DependenciesConfiguration

_public class_

Namespace: `Industria4.Web`

Source: `src/Shared/Web/Dependencies.cs`

## Summary

Configures and holds instances to run before host start.

## Constructors

### DependenciesConfiguration

_constructor_

```csharp
DependenciesConfiguration(IServiceProvider services)
```

Initialises a new configuration with the host service provider. The host's service provider.

## Properties

### Checkers

_property_

```csharp
IEnumerable<IDependencyChecker> Checkers
```

Gets the list of configured checker

### Services

_property_

```csharp
IServiceProvider Services
```

Gets the services

## Methods

### Add

_method_

```csharp
DependenciesConfiguration Add<T>(T checker)
```

Adds a new check

