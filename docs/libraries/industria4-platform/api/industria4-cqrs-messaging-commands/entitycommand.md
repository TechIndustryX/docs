---
title: "EntityCommand<T>"
---

# EntityCommand&lt;T&gt;

_public class_

Namespace: `Industria4.Cqrs.Messaging.Commands`

Source: `src/Shared/Cqrs/Messaging/Commands/EntityCommand.cs`

## Summary

Represents a base implementation of a command which works with an entity

## Constructors

### EntityCommand

_constructor_

```csharp
EntityCommand(string id)
```

Initialises the command with the given entity ID, generating a new one if `id` is `null`. The entity identifier, or `null` to generate a new ID.

## Properties

### Id

_property_

```csharp
string Id
```

Gets the entity id

