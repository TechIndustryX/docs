---
title: "ProfileService"
---

# ProfileService

_public class_

Namespace: `Industria4.Identity.EntityFramework`

Source: `src/Identity/Identity.EntityFramework/ProfileService.cs`

## Summary

IdentityServer4 profile service that enriches tokens with user roles and claims.

## Constructors

### ProfileService

_constructor_

```csharp
ProfileService(UserManager<User> userManager)
```

Initializes a new instance of . The user manager used to retrieve user data.

## Methods

### GetProfileDataAsync

_method_

```csharp
Task GetProfileDataAsync(ProfileDataRequestContext context)
```

Populates the token with the user's claims and roles. The profile data request context.

### IsActiveAsync

_method_

```csharp
Task IsActiveAsync(IsActiveContext context)
```

Checks whether the subject's user account is active. The is-active context.

