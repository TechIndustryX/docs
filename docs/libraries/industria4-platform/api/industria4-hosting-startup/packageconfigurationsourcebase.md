---
title: "PackageConfigurationSourceBase"
---

# PackageConfigurationSourceBase

_public class_

Namespace: `Industria4.Hosting.Startup`

Source: `src/Hosting/Hosting.Startup/PackageConfigurationSourceBase.cs`

## Summary

Base class for configuration sources that serialize package configurations into a JSON configuration stream.

## Constructors

### PackageConfigurationSourceBase

_constructor_

```csharp
PackageConfigurationSourceBase()
```

Initializes a new instance of with defaults for optional JSON source.

## Methods

### GetPackages

_method_

```csharp
IEnumerable<Package> GetPackages()
```

Returns the packages whose configurations should be serialized into the configuration stream.

