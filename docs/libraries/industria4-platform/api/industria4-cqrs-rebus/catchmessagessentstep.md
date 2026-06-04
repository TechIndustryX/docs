---
title: "CatchMessagesSentStep"
---

# CatchMessagesSentStep

_public class_

Namespace: `Industria4.Cqrs.Rebus`

Source: `src/Shared/Cqrs.Rebus/Rebus/CatchMessagesSentStep.cs`

## Summary

Rebus outgoing step that captures each outgoing in the scoped , enabling assertions in tests.

## Methods

### Process

_method_

```csharp
Task Process(OutgoingStepContext context,Func<Task> next)
```

