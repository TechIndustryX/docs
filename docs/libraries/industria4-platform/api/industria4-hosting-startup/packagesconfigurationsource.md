---
title: "PackagesConfigurationSource"
---

# PackagesConfigurationSource

_public class_

Namespace: `Industria4.Hosting.Startup`

Source: `src/Hosting/Hosting.Startup/PackagesConfigurationSource.cs`

## Summary

A that loads packages from all registered instances.

## Constructors

### PackagesConfigurationSource

_constructor_

```csharp
PackagesConfigurationSource(IEnumerable<IPackagesProvider> packagesProviders)
```

Initializes a new instance of with the registered providers. The collection of package providers to query for packages.

## Methods

### GetPackages

_method_

```csharp
IEnumerable<Package> GetPackages()
```

