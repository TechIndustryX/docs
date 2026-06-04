---
title: "PackageZipCatalog"
---

# PackageZipCatalog

_public class_

Namespace: `Industria4.Hosting.Startup`

Source: `src/Hosting/Hosting.Startup/PackageZipCatalog.cs`

## Summary

A that tags all discovered items with package metadata.

## Constructors

### PackageZipCatalog

_constructor_

```csharp
PackageZipCatalog(ILogger logger,string packageName,Stream zipStream,bool isClient)
```

Initializes a new instance of from a zip stream. Logger for diagnostic output. The name of the owning package. A readable stream containing the zip archive. Whether this catalog targets the client (browser) host.

### PackageZipCatalog

_constructor_

```csharp
PackageZipCatalog(ILogger logger,string packageName,string zipPath,bool isClient)
```

Initializes a new instance of from a zip file path. Logger for diagnostic output. The name of the owning package. The path to the zip archive. Whether this catalog targets the client (browser) host.

## Properties

### PackageName

_property_

```csharp
string PackageName
```

Gets the name of the owning package.

