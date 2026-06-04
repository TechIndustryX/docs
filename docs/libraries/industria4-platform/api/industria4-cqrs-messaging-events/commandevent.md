---
title: "CommandEvent<T>"
---

# CommandEvent&lt;T&gt;

_public class_

Namespace: `Industria4.Cqrs.Messaging.Events`

Source: `src/Shared/Cqrs/Messaging/Events/CommandEvent.cs`

## Summary

Represents an event for a specific command

## Constructors

### CommandEvent

_constructor_

```csharp
CommandEvent(string commandId,object state)
```

Initialises a new instance with the originating command identifier and state. The identifier of the command that raised this event. Optional state information associated with the event.

## Properties

### CommandId

_property_

```csharp
string CommandId
```

The original command id which has raised the event

### State

_property_

```csharp
object State
```

Gets a generic state information

