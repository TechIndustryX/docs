---
title: "AccountController"
---

# AccountController

_public class_

Namespace: `Industria4.Identity.WebApi.Controllers`

Source: `src/Identity/Identity.WebApi/Controllers/AccountController.cs`

## Summary

MVC controller that handles account login and logout flows for IdentityServer4.

## Methods

### AccessDenied

_method_

```csharp
IActionResult AccessDenied()
```

Displays the access-denied page. The access-denied view.

### Login

_method_

```csharp
Task<IActionResult> Login(LoginInputModel model,string button)
```

Handle postback from username/password login

### Login

_method_

```csharp
Task<IActionResult> Login(string returnUrl)
```

Entry point into the login workflow

### Logout

_method_

```csharp
Task<IActionResult> Logout(LogoutInputModel model)
```

Handle logout page postback

### Logout

_method_

```csharp
Task<IActionResult> Logout(string logoutId)
```

Show logout page

