---
title: "ModuleController"
---

# ModuleController

_public class_

Namespace: `Industria4.Hosting.WebApp.Server.Controllers`

Source: `src/Hosting/Hosting.WebApp.Server/Controllers/ModuleController.cs`

## Summary

API controller that exposes package (module) management endpoints, including query, upload, configuration, and restart.

## Methods

### GetAreReady

_method_

```csharp
IActionResult GetAreReady()
```

Returns whether all modules have finished loading. Returns `true` also in safe mode where the loader is not registered.

### Restart

_method_

```csharp
IActionResult Restart([FromServices] IHostApplicationLifetime hostApplicationLifetime)
```

Initiates a graceful application restart after a short delay (500 ms).

