---
title: "Extensions"
---

# Extensions

_public class_

Namespace: `Rebus.Bus`

Source: `src/Shared/Cqrs.Rebus/Rebus/Extensions.cs`

## Summary

Extension methods for Rebus

## Methods

### PublishCommandErrorEvent

_method_

```csharp
Task PublishCommandErrorEvent<T>(this IBus bus,T command,Exception exception)
```

Publish a CommandErrorEvent

