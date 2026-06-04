---
title: "License"
---

# License

_public class_

Namespace: `Industria4.Hosting.Startup`

Source: `src/Hosting/Hosting.Startup/LicenseGenerator.cs`

## Summary

Represents a signed license record that ties a machine code to a set of package names and an optional expiration date.

## Properties

### Expiration

_property_

```csharp
DateTimeOffset? Expiration
```

Gets or sets the optional expiration date of the license. means the license never expires.

### Hash

_property_

```csharp
string Hash
```

Gets or sets the cryptographic signature hash used to verify the license has not been tampered with.

### MachineCode

_property_

```csharp
string MachineCode
```

Gets or sets the hardware-derived machine code that this license is locked to.

### Packages

_property_

```csharp
string[] Packages
```

Gets or sets the array of package names covered by this license.

