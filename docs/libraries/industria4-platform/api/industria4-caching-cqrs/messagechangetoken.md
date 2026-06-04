---
title: "MessageChangeToken"
---

# MessageChangeToken

_public class_

Namespace: `Industria4.Caching.Cqrs`

Source: `src/Shared/Caching.Cqrs/MessageChangeToken.cs`

## Summary

An that triggers change callbacks when a matching CQRS message is received on the message bus.

## Constructors

### MessageChangeToken

_constructor_

```csharp
MessageChangeToken(ILogger<MessageChangeToken> logger,IMessagesWaiter messagesWaiter,IEnumerable<Type> types,Func<IMessage,bool> filter)
```

Initialises a new instance that listens for the specified message types using the given waiter. Logger used to record errors from background subscriptions. The service that provides message watchers. The message types that trigger cache invalidation. An optional predicate to filter incoming messages; `null` accepts all messages.

## Properties

### ActiveChangeCallbacks

_property_

```csharp
bool ActiveChangeCallbacks
```

### HasChanged

_property_

```csharp
bool HasChanged
```

### Types

_property_

```csharp
IEnumerable<Type> Types
```

Gets the message types that will trigger invalidation.

## Methods

### RegisterChangeCallback

_method_

```csharp
IDisposable RegisterChangeCallback(Action<object> callback,object state)
```

