---
title: "LicenseModel"
---

# LicenseModel

_public class_

Namespace: `Industria4.Hosting.Http.License`

Source: `src/Hosting/Hosting.Http/License/LicenseModel.cs`

## Summary

Response model representing the current license state returned by the license API.

## Properties

### ActivatedPackages

_property_

```csharp
IReadOnlyList<string> ActivatedPackages
```

Gets or sets the list of package names that are activated by the current license.

### ActiveLicenseKey

_property_

```csharp
string ActiveLicenseKey
```

Gets or sets the currently active license key, or if no key is set.

### Expiration

_property_

```csharp
DateTimeOffset? Expiration
```

Gets or sets the license expiration date, or if the license does not expire.

### IsTrial

_property_

```csharp
bool IsTrial
```

Gets or sets a value indicating whether the current license is a trial license.

### IsValid

_property_

```csharp
bool IsValid
```

Gets or sets a value indicating whether the current license is valid.

### MachineCode

_property_

```csharp
string MachineCode
```

Gets or sets the hardware-derived machine code used to generate license requests.

### RequestCode

_property_

```csharp
string RequestCode
```

Gets or sets the encoded request code that must be submitted to obtain a license.

