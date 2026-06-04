---
title: "AddOrUpdateRoleCommand"
---

# AddOrUpdateRoleCommand

_public class_

Namespace: `Industria4.Identity.Cqrs.Commands.Roles`

Source: `src/Identity/Identity.Cqrs/Commands/Roles/AddOrUpdateRoleCommand.cs`

## Summary

Command to create a new role or update an existing one.

## Constructors

### AddOrUpdateRoleCommand

_constructor_

```csharp
AddOrUpdateRoleCommand(string id,string name)
```

Initializes a new command for creating or updating a role. The role identifier (new GUID-string for creation, existing ID for updates). The display name of the role.

## Properties

### Name

_property_

```csharp
string Name
```

Gets the display name of the role.

