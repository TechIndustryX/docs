---
title: "LoadingService"
---

# LoadingService

_public class_

Namespace: `Industria4.Web.Forms.Services`

Source: `src/Shared/Web.Forms/Services/LoadingService.cs`

## Summary

Implements by wrapping an async operation with loading-indicator management and centralised error handling via .

## Constructors

### LoadingService

_constructor_

```csharp
LoadingService(ILogger<LoadingService> logger,IDialogService dialogService,IEnumerable<IResourcesProvider> resourcesProviders)
```

Initialises a new instance with the required services. Logger for error diagnostics. Dialog service used to display error messages. Resource providers for localising error codes.

## Methods

### LoadAsync

_method_

```csharp
Task<bool> LoadAsync(Func<Task> load)
```

