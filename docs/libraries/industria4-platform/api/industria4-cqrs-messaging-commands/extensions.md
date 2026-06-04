---
title: "Extensions"
---

# Extensions

_public class_

Namespace: `Industria4.Cqrs.Messaging.Commands`

Source: `src/Shared/Cqrs.Rebus/Messaging/Commands/Extensions.cs`

## Summary

Extensions dedicated to the commands

## Methods

### DisableAutoCompleteEvent

_method_

```csharp
void DisableAutoCompleteEvent(this ICommand command)
```

Disables the raising of an CommandCompletedEvent for the specified command in current context

### GetIsAutoCompleteEventDisabled

_method_

```csharp
bool GetIsAutoCompleteEventDisabled(this ITransactionContext context)
```

Gets if the raising of an CommandCompletedEvent for the specified command in current context is disabled

