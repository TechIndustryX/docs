---
title: "MessagesCatcher"
---

# MessagesCatcher

_public class_

Namespace: `Industria4.Cqrs.Messaging`

Source: `src/Shared/Cqrs.Rebus/Messaging/MessagesCatcher.cs`

## Summary

Rebus-based implementation of that accumulates dispatched messages for test inspection.

## Constructors

### MessagesCatcher

_constructor_

```csharp
MessagesCatcher(IBus bus)
```

Initialises a new instance bound to the given Rebus bus. The Rebus bus instance.

## Properties

### Messages

_property_

```csharp
IEnumerable<IMessage> Messages
```

### OnNewMessage

_property_

```csharp
Action<IMessage> OnNewMessage
```

## Methods

### Add

_method_

```csharp
void Add(IMessage message)
```

