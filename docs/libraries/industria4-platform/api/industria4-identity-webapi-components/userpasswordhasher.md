---
title: "UserPasswordHasher"
---

# UserPasswordHasher

_public class_

Namespace: `Industria4.Identity.WebApi.Components`

Source: `src/Identity/Identity.WebApi/Components/UserPasswordHasher.cs`

## Summary

Custom password hasher that salts the password with the user identifier before hashing.

## Methods

### HashPassword

_method_

```csharp
string HashPassword(User user,string password)
```

Hashes the password salted with the user's identifier. The user whose identifier is used as a salt. The plain-text password to hash. The hashed password string.

### VerifyHashedPassword

_method_

```csharp
PasswordVerificationResult VerifyHashedPassword(User user,string hashedPassword,string providedPassword)
```

Verifies a provided password against the stored hash, using the user identifier as a salt. The user whose identifier is used as a salt. The stored hashed password. The plain-text password to verify. A indicating the outcome.

