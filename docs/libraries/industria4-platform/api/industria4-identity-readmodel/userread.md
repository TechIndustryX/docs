---
title: "UserRead"
---

# UserRead

_public class_

Namespace: `Industria4.Identity.ReadModel`

Source: `src/Identity/Identity.ReadModel/UserRead.cs`

## Summary

Read model representing a user account as returned by the Identity query stack.

## Properties

### AccessFailedCount

_property_

```csharp
int AccessFailedCount
```

Gets or sets the number of consecutive failed access attempts.

### Email

_property_

```csharp
string Email
```

Gets or sets the user's email address.

### EmailConfirmed

_property_

```csharp
bool EmailConfirmed
```

Gets or sets a value indicating whether the email address has been confirmed.

### Id

_property_

```csharp
string Id
```

Gets or sets the unique user identifier.

### LockoutEnabled

_property_

```csharp
bool LockoutEnabled
```

Gets or sets a value indicating whether account lockout is enabled for this user.

### LockoutEnd

_property_

```csharp
DateTimeOffset? LockoutEnd
```

Gets or sets the date and time when the lockout ends, or `null` if the account is not locked.

### PasswordHash

_property_

```csharp
string PasswordHash
```

Gets or sets the hashed password. `null` for external login-only accounts.

### PhoneNumber

_property_

```csharp
string PhoneNumber
```

Gets or sets the user's phone number.

### PhoneNumberConfirmed

_property_

```csharp
bool PhoneNumberConfirmed
```

Gets or sets a value indicating whether the phone number has been confirmed.

### TwoFactorEnabled

_property_

```csharp
bool TwoFactorEnabled
```

Gets or sets a value indicating whether two-factor authentication is enabled for the user.

### UserName

_property_

```csharp
string UserName
```

Gets or sets the login username.

