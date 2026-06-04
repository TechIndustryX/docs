---
title: "DeletedUserEvent"
---

# DeletedUserEvent

_public class_

Namespace: `Industria4.Identity.DomainModel.Events`

Source: `src/Identity/Identity.DomainModel/Events/DeletedUserEvent.cs`

## Summary

Event raised when a user account is deleted.

## Constructors

### DeletedUserEvent

_constructor_

```csharp
DeletedUserEvent(string userId,string userName,string byUserId)
```

Initializes a new deleted-user event. The identifier of the deleted user. The username of the deleted user. The identifier of the admin who performed the deletion.

## Properties

### ByUserId

_property_

```csharp
string ByUserId
```

Gets the identifier of the administrator who performed the deletion.

