---
title: "Extensions"
---

# Extensions

_public class_

Namespace: `Industria4.Cqrs.Messaging.Commands`

Source: `src/Shared/Cqrs/Messaging/Commands/Extensions.cs`

## Summary

Extensions dedicated to the commands

## Methods

### WhenFinished

_method_

```csharp
Task WhenFinished<T>(this T command,IMessagesWaiter messagesWaiter,TimeSpan timeout)
```

Awaits completion of the command within the given timeout, throwing on error or validation failure. The command type. The command to wait for. The messages waiter used to subscribe to completion events. Maximum time to wait for the command to complete.

### WhenFinished

_method_

```csharp
Task WhenFinished<T>(this T command,IMessagesWaiter messagesWaiter)
```

Awaits completion of the command using a default 15-second timeout. The command type. The command to wait for. The messages waiter used to subscribe to completion events.

