---
title: "LicenseController"
---

# LicenseController

_public class_

Namespace: `Industria4.Hosting.WebApp.Server.Controllers`

Source: `src/Hosting/Hosting.WebApp.Server/Controllers/LicenseController.cs`

## Summary

API controller that exposes license management endpoints (get, activate, cancel).

## Constructors

### LicenseController

_constructor_

```csharp
LicenseController(LicenseManager licenseManager,IHostApplicationLifetime hostApplicationLifetime)
```

Initializes a new instance of with the required services.

## Methods

### Cancel

_method_

```csharp
Task<IActionResult> Cancel()
```

Cancels the active license and restarts the application.

### Get

_method_

```csharp
Task<LicenseModel> Get()
```

Returns the current license information.

