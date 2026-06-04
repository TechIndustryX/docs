---
title: "ChangedRoleEvent"
---

# ChangedRoleEvent

_public class_

Namespace: `Industria4.Identity.DomainModel.Events`

Source: `src/Identity/Identity.DomainModel/Events/ChangedRoleEvent.cs`

## Summary

Event raised when a role is created or updated.

## Constructors

### ChangedRoleEvent

_constructor_

```csharp
ChangedRoleEvent(string roleId,string roleName,string userId,string userName)
```

Initializes a new changed-role event. The identifier of the role that changed. The name of the role that changed. The identifier of the admin who made the change. The username of the admin who made the change.

## Properties

### RoleId

_property_

```csharp
string RoleId
```

Gets the identifier of the affected role.

### RoleName

_property_

```csharp
string RoleName
```

Gets the display name of the affected role.

