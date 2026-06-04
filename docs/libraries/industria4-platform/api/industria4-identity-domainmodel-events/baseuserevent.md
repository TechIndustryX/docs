---
title: "BaseUserEvent"
---

# BaseUserEvent

_public class_

Namespace: `Industria4.Identity.DomainModel.Events`

Source: `src/Identity/Identity.DomainModel/Events/BaseUserEvent.cs`

## Summary

Abstract base for all user-related Identity audit events.

## Constructors

### BaseUserEvent

_constructor_

```csharp
BaseUserEvent(string userId,string userName,string name,EventTypes type,int id)
```

Initializes a new base user event. The identifier of the affected user. The username of the affected user. The event name. The event type (success / failure / information / error). The numeric event identifier.

## Properties

### UserId

_property_

```csharp
string UserId
```

Gets the identifier of the affected user.

### UserName

_property_

```csharp
string UserName
```

Gets the username of the affected user.

