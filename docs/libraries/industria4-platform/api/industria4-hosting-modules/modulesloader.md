---
title: "ModulesLoader"
---

# ModulesLoader

_public class_

Namespace: `Industria4.Hosting.Modules`

Source: `src/Shared/Hosting/Modules/ModulesLoader.cs`

## Summary

Loads registered implementations from the DI container and calls their methods in sequence.

## Constructors

### ModulesLoader

_constructor_

```csharp
ModulesLoader(ILogger<ModulesLoader> logger,IServiceProvider serviceProvider)
```

Initialises a new instance with the given logger and service provider. Logger for diagnostics. The DI container used to resolve modules.

## Methods

### LoadAsync

_method_

```csharp
Task LoadAsync(CancellationToken token)
```

Loads all registered services. A cancellation token.

### LoadAsync

_method_

```csharp
Task LoadAsync(Type moduleType,CancellationToken token)
```

Loads all services registered for `moduleType`. The module interface or base class to resolve from the container. A cancellation token.

