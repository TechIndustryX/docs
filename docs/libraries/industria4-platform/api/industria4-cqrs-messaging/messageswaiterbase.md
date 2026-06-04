---
title: "MessagesWaiterBase"
---

# MessagesWaiterBase

_public class_

Namespace: `Industria4.Cqrs.Messaging`

Source: `src/Shared/Cqrs/Messaging/MessagesWaiterBase.cs`

## Summary

Base class for implementations that manages in-memory waiter registrations keyed by message type.

## Properties

### PendingTypes

_property_

```csharp
IEnumerable<Type> PendingTypes
```

Gets the message types that currently have at least one pending waiter registered.

## Methods

### GetAsync

_method_

```csharp
Task<IMessageWaiter> GetAsync(IEnumerable<Type> messageTypes,Func<IMessage,bool> filter)
```

### GetPending

_method_

```csharp
IEnumerable<IDisposable> GetPending(Type type)
```

Returns the collection of pending waiter disposables registered for the given message type. The message type to look up. The registered waiter disposables, or an empty sequence if none are registered.

### Handle

_method_

```csharp
void Handle(IMessage message)
```

Dispatches the received message to all registered waiters subscribed to its type. The message to dispatch.

### Release

_method_

```csharp
void Release(IEnumerable<Type> messageTypes,IMessageWaiter messageWaiter)
```

Removes all waiter registrations for the specified message types and waiter instance. The message types whose registrations should be removed. The waiter instance to unregister.

