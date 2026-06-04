---
title: "LicenseManager"
---

# LicenseManager

_public class_

Namespace: `Industria4.Hosting.Startup`

Source: `src/Hosting/Hosting.Startup/LicenseManager.cs`

## Summary

Manages the loading, validation, and lifecycle of the Industria4 runtime license.

## Constructors

### LicenseManager

_constructor_

```csharp
LicenseManager(ILogger<LicenseManager> logger,IDataProtectionProvider dataProtectorProvider,IServiceProvider serviceProvider)
```

Initializes a new instance of and computes the machine code.

## Properties

### ActivatedPackages

_property_

```csharp
IReadOnlyList<string> ActivatedPackages
```

Gets the list of package names activated by the current license.

### ActiveLicenseKey

_property_

```csharp
string ActiveLicenseKey
```

Gets the currently active license key, or if no key has been set.

### Expiration

_property_

```csharp
DateTimeOffset? Expiration
```

Gets the license expiration date, or if the license does not expire.

### IsTrial

_property_

```csharp
bool IsTrial
```

Gets a value indicating whether the current license is a trial license.

### MachineCode

_property_

```csharp
string MachineCode
```

Gets the hardware-derived machine code for this host.

### RequestCode

_property_

```csharp
string RequestCode
```

Gets the request code that must be submitted to obtain a production license key.

## Methods

### CancelLicenseAsync

_method_

```csharp
Task CancelLicenseAsync()
```

Cancels the current license and reverts to a new trial period.

### EnsureLoadedAsync

_method_

```csharp
Task EnsureLoadedAsync()
```

Ensures the license state is loaded; subsequent calls are no-ops until is called.

### GetIsValid

_method_

```csharp
bool GetIsValid()
```

Returns if the current license has not expired.

### LoadAsync

_method_

```csharp
Task LoadAsync()
```

Reloads the license state from persistent storage.

### SetLicenseAsync

_method_

```csharp
Task<bool> SetLicenseAsync(string key)
```

Activates a new license key after verifying it against the current machine code. The license key to activate. if the key is valid and was saved; otherwise .

## Events

### ValidChanged

_event_

```csharp
event EventHandler ValidChanged
```

Raised when the license validity changes.

