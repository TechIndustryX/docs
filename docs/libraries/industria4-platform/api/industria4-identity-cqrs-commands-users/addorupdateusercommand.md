---
title: "AddOrUpdateUserCommand"
---

# AddOrUpdateUserCommand

_public class_

Namespace: `Industria4.Identity.Cqrs.Commands.Users`

Source: `src/Identity/Identity.Cqrs/Commands/Users/AddOrUpdateUserCommand.cs`

## Summary

Command to create a new user account or update an existing one, including roles and claims.

## Constructors

### AddOrUpdateUserCommand

_constructor_

```csharp
AddOrUpdateUserCommand(string id,string userName,string password,bool hashedPassword,string[] roles,UserClaim[] claims)
```

Initializes a new command with the full user data. The user identifier (new GUID-string for creation, existing ID for updates). The login username. The plain-text or hashed password. When `true`, `password` is already hashed. The roles to assign. The claims to assign.

## Properties

### Claims

_property_

```csharp
UserClaim[] Claims
```

Gets the claims to assign to the user.

### HashedPassword

_property_

```csharp
bool HashedPassword
```

Gets a value indicating whether is already hashed.

### Password

_property_

```csharp
string Password
```

Gets the plain-text or hashed password. See to distinguish.

### Roles

_property_

```csharp
string[] Roles
```

Gets the role names to assign to the user.

### UserName

_property_

```csharp
string UserName
```

Gets the login username.

