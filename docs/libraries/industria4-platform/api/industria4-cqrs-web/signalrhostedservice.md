---
title: "SignalrHostedService"
---

# SignalrHostedService

_public class_

Namespace: `Industria4.Cqrs.Web`

Source: `src/Shared/Cqrs.Web/SignalrHostedService.cs`

## Summary

Hosted service and implementation that subscribes to a SignalR hub and dispatches received messages to waiting listeners.

## Constructors

### SignalrHostedService

_constructor_

```csharp
SignalrHostedService(ILogger<SignalrHostedService> logger,IOptionsMonitor<SignalrMessagesWaiterOptions> options)
```

Initialises a new instance with the given logger and options. Logger for diagnostics. Options monitor supplying the current .

## Methods

### GetAsync

_method_

```csharp
Task<IMessageWaiter> GetAsync(IEnumerable<Type> messageTypes,Func<IMessage,bool> filter)
```

### Release

_method_

```csharp
void Release(IEnumerable<Type> messageTypes,IMessageWaiter messageWaiter)
```

### StartAsync

_method_

```csharp
Task StartAsync(CancellationToken cancellationToken)
```

### StopAsync

_method_

```csharp
Task StopAsync(CancellationToken cancellationToken)
```

