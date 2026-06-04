---
title: "LogMessageStep"
---

# LogMessageStep

_public class_

Namespace: `Industria4.Cqrs.Rebus`

Source: `src/Shared/Cqrs.Rebus/Rebus/LogMessageStep.cs`

## Summary

Rebus pipeline step that logs outgoing and incoming message bodies at `Debug` level.

## Constructors

### LogMessageStep

_constructor_

```csharp
LogMessageStep(ILogger<LogMessageStep> logger)
```

Initialises a new instance with the given logger. Logger used for message diagnostics.

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

