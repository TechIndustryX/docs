---
title: "DeletedRoleEvent"
---

# DeletedRoleEvent

_public class_

Namespace: `Industria4.Identity.DomainModel.Events`

Source: `src/Identity/Identity.DomainModel/Events/DeletedRoleEvent.cs`

## Summary

Event raised when a role is deleted.

## Constructors

### DeletedRoleEvent

_constructor_

```csharp
DeletedRoleEvent(string roleId,string roleName,string userId,string userName)
```

Initializes a new deleted-role event. The identifier of the deleted role. The name of the deleted role. The identifier of the admin who performed the deletion. The username of the admin who performed the deletion.

## Properties

### RoleId

_property_

```csharp
string RoleId
```

Gets the identifier of the deleted role.

### RoleName

_property_

```csharp
string RoleName
```

Gets the name of the deleted role.

