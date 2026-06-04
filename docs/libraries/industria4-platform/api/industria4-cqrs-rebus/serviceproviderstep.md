---
title: "ServiceProviderStep"
---

# ServiceProviderStep

_public class_

Namespace: `Industria4.Cqrs.Rebus`

Source: `src/Shared/Cqrs.Rebus/Rebus/ServiceProviderStep.cs`

## Summary

Rebus pipeline step that propagates an scope across both incoming and outgoing steps, creating a fresh DI scope when none is active.

## Constructors

### ServiceProviderStep

_constructor_

```csharp
ServiceProviderStep(IServiceProvider serviceProvider)
```

Initialises a new instance with the root service provider. The root DI service provider.

## Methods

### Process

_method_

```csharp
Task Process(IncomingStepContext context,Func<Task> next)
```

### Process

_method_

```csharp
Task Process(OutgoingStepContext context,Func<Task> next)
```

