---
title: "PackageAssemblyCatalog"
---

# PackageAssemblyCatalog

_public class_

Namespace: `Industria4.Hosting.Startup`

Source: `src/Hosting/Hosting.Startup/PackageAssemblyCatalog.cs`

## Summary

An that wraps a single assembly and exposes its catalog items tagged with package metadata.

## Constructors

### PackageAssemblyCatalog

_constructor_

```csharp
PackageAssemblyCatalog(Assembly assembly,string packageName,in bool isClient)
```

Initializes a new instance of for the given assembly and package. The assembly to wrap. The name of the owning package. Whether this catalog is for client-side use.

## Properties

### Assembly

_property_

```csharp
Assembly Assembly
```

Gets the wrapped assembly.

### Catalog

_property_

```csharp
AssemblyCatalog Catalog
```

Gets the underlying for the wrapped assembly.

### IsClient

_property_

```csharp
bool IsClient
```

Gets a value indicating whether this catalog targets the client (browser) host.

### PackageName

_property_

```csharp
string PackageName
```

Gets the name of the package that owns this assembly.

