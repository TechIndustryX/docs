---
title: "PackageDirectoryCatalog"
---

# PackageDirectoryCatalog

_public class_

Namespace: `Industria4.Hosting.Startup`

Source: `src/Hosting/Hosting.Startup/PackageDirectoryCatalog.cs`

## Summary

A that tags all discovered items with package metadata.

## Constructors

### PackageDirectoryCatalog

_constructor_

```csharp
PackageDirectoryCatalog(string packageName,string path,bool isClient,string[] includes = null,string[] excludes = null,string entrypoint = null)
```

Initializes a new instance of for the specified directory and package. The name of the owning package. The directory path to scan for catalog items. Whether this catalog targets the client (browser) host. Optional glob patterns for files to include. Optional glob patterns for files to exclude. Optional assembly name (without extension) that is the entry point for this package.

