---
title: "AutoSetMessageIdStep"
---

# AutoSetMessageIdStep

_public class_

Namespace: `Industria4.Cqrs.Rebus`

Source: `src/Shared/Cqrs.Rebus/Rebus/AutoSetMessageIdStep.cs`

## Summary

Automatically set message id and correlation headers

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

