---
title: "IdentityModule"
---

# IdentityModule

_public class_

Namespace: `Industria4.Identity.WebApp.Modules`

Source: `src/Identity/Identity.WebApp/Modules/IdentityModule.cs`

## Summary

Client module that populates the navigation menu with Identity-related entries based on the current user's authorization.

## Properties

### Name

_property_

```csharp
string Name
```

Gets the display name of this module.

## Methods

### LoadAsync

_method_

```csharp
Task LoadAsync(CancellationToken cancellationToken)
```

Loads the module by populating the navigation menu according to the user's current authorization state. A token to observe for cancellation.

### UnloadAsync

_method_

```csharp
Task UnloadAsync(CancellationToken cancellationToken)
```

Unloads the module. No cleanup is required. A token to observe for cancellation.

