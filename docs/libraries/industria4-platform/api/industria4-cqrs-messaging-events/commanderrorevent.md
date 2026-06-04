---
title: "CommandErrorEvent<T>"
---

# CommandErrorEvent&lt;T&gt;

_public class_

Namespace: `Industria4.Cqrs.Messaging.Events`

Source: `src/Shared/Cqrs/Messaging/Events/CommandErrorEvent.cs`

## Summary

Represents an error event for a specific command

## Constructors

### CommandErrorEvent

_constructor_

```csharp
CommandErrorEvent(string commandId,object state,Exception[] exceptions)
```

Initialises a new instance with the given command ID, state, and exceptions. The identifier of the failed command. Optional state object associated with the command. The exceptions raised during command execution.

## Properties

### Exceptions

_property_

```csharp
Exception[] Exceptions
```

Gets the exceptions raised by the command

