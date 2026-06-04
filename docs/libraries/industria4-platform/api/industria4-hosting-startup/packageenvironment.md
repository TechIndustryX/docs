---
title: "PackageEnvironment"
---

# PackageEnvironment

_public class_

Namespace: `Industria4.Hosting.Startup`

Source: `src/Hosting/Hosting.Startup/PackageEnvironment.cs`

## Summary

Encapsulates an isolated used to discover and initialize packages before the main application host starts.

## Properties

### Host

_property_

```csharp
IHost Host
```

Gets the inner host that provides package-discovery services.

## Methods

### CreateAsync

_method_

```csharp
Task<PackageEnvironment> CreateAsync(IEnumerable<IPackagesProvider> additionalPackageProviders)
```

Creates and starts a new with the given additional package providers. Extra instances to register in the inner host.

### Dispose

_method_

```csharp
void Dispose()
```

