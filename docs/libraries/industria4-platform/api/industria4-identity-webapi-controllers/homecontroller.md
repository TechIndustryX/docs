---
title: "HomeController"
---

# HomeController

_public class_

Namespace: `Industria4.Identity.WebApi.Controllers`

Source: `src/Identity/Identity.WebApi/Controllers/HomeController.cs`

## Summary

Default MVC controller handling the home page and error display.

## Constructors

### HomeController

_constructor_

```csharp
HomeController(IIdentityServerInteractionService interaction,IWebHostEnvironment environment,ILogger<HomeController> logger)
```

Initializes a new instance of . The IdentityServer4 interaction service. The web hosting environment. The logger instance.

## Methods

### Error

_method_

```csharp
Task<IActionResult> Error(string errorId)
```

Displays the error page with details from IdentityServer4. The IdentityServer4 error identifier. The error view model.

### Index

_method_

```csharp
IActionResult Index()
```

Displays the home page. The default view.

