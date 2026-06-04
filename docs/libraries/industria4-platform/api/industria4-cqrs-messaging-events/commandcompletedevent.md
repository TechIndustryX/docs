---
title: "CommandCompletedEvent<T>"
---

# CommandCompletedEvent&lt;T&gt;

_public class_

Namespace: `Industria4.Cqrs.Messaging.Events`

Source: `src/Shared/Cqrs/Messaging/Events/CommandCompletedEvent.cs`

## Summary

Represents an completed event for a specific command

## Constructors

### CommandCompletedEvent

_constructor_

```csharp
CommandCompletedEvent(string commandId,object state)
```

Initialises a new instance with the given command ID and state. The identifier of the completed command. Optional state object associated with the command.

