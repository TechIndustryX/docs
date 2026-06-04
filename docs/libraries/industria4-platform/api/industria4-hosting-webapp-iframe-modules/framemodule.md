---
title: "FrameModule"
---

# FrameModule

_public class_

Namespace: `Industria4.Hosting.WebApp.IFrame.Modules`

Source: `src/Hosting/Hosting.WebApp.IFrame/Modules/FrameModule.cs`

## Summary

An that registers IFrame navigation menu entries based on .

## Constructors

### FrameModule

_constructor_

```csharp
FrameModule(IMenuService menuService,AuthenticationStateProvider authenticationStateProvider,IAuthorizationService authorizationService,IOptions<FrameOptions> frameOptions)
```

Initializes a new instance of with the required services.

## Properties

### Name

_property_

```csharp
string Name
```

Gets the unique name that identifies this module.

## Methods

### LoadAsync

_method_

```csharp
Task LoadAsync(CancellationToken cancellationToken)
```

### UnloadAsync

_method_

```csharp
Task UnloadAsync(CancellationToken cancellationToken)
```

