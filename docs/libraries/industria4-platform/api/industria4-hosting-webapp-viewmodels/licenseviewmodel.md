---
title: "LicenseViewModel"
---

# LicenseViewModel

_public class_

Namespace: `Industria4.Hosting.WebApp.ViewModels`

Source: `src/Hosting/Hosting.WebApp/ViewModels/LicenseViewModel.cs`

## Summary

View model for the license management page, handling load, activation, and cancellation of licenses.

## Constructors

### LicenseViewModel

_constructor_

```csharp
LicenseViewModel(ILoadingService loadingService,LicenseClient licenseClient,IToaster toaster)
```

Initializes a new instance of with the required services.

## Properties

### License

_property_

```csharp
LicenseModel License
```

Gets or sets the current license information retrieved from the server.

### LicenseKey

_property_

```csharp
string LicenseKey
```

Gets or sets the license key entered by the user for activation.

## Methods

### Activate

_method_

```csharp
Task Activate()
```

Activates a new license using and shows a toast notification with the result.

### Cancel

_method_

```csharp
Task Cancel()
```

Cancels the active license and reverts to trial mode.

### LoadAsync

_method_

```csharp
Task LoadAsync()
```

Loads the current license information from the server.

