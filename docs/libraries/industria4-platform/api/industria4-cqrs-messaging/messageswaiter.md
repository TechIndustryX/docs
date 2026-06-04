---
title: "MessagesWaiter"
---

# MessagesWaiter

_internal class_

Namespace: `Industria4.Cqrs.Messaging`

Source: `src/Shared/Cqrs.Rebus/Messaging/MessagesWaiter.cs`

## Constructors

### MessagesWaiter

_constructor_

```csharp
MessagesWaiter(IBus bus)
```

Initializes a new instance of .

## Methods

### GetAsync

_method_

```csharp
Task<IMessageWaiter> GetAsync(IEnumerable<Type> messageTypes,Func<IMessage,bool> filter)
```

get async.

