---
title: "ChangedUserEvent"
---

# ChangedUserEvent

_public class_

Namespace: `Industria4.Identity.DomainModel.Events`

Source: `src/Identity/Identity.DomainModel/Events/ChangedUserEvent.cs`

## Summary

Event raised when a user account is created or updated.

## Constructors

### ChangedUserEvent

_constructor_

```csharp
ChangedUserEvent(string userId,string userName,string byUserId)
```

Initializes a new changed-user event. The identifier of the affected user. The username of the affected user. The identifier of the admin who made the change.

## Properties

### ByUserId

_property_

```csharp
string ByUserId
```

Gets the identifier of the administrator who performed the change.

### Claims

_property_

```csharp
Claim[] Claims
```

Gets or sets the claims currently assigned to the user.

### Roles

_property_

```csharp
string[] Roles
```

Gets or sets the roles currently assigned to the user.

