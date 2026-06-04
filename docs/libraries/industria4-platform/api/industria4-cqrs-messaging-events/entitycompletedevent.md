---
title: "EntityCompletedEvent<T>"
---

# EntityCompletedEvent&lt;T&gt;

_public class_

Namespace: `Industria4.Cqrs.Messaging.Events`

Source: `src/Shared/Cqrs/Messaging/Events/EntityCompletedEvent.cs`

## Summary

Represents a completetion event for a specific command related to an entity

## Constructors

### EntityCompletedEvent

_constructor_

```csharp
EntityCompletedEvent(string id)
```

Initialises a new instance with the specified entity identifier. The unique identifier of the completed entity.

## Properties

### Id

_property_

```csharp
string Id
```

Gets the entity id

