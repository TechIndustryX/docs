---
title: "DirectoryCatalog"
---

# DirectoryCatalog

_public class_

Namespace: `Industria4.Hosting.Catalogs`

Source: `src/Shared/Hosting/Catalogs/DirectoryCatalog.cs`

## Summary

Catalog that discovers assemblies and files in a file-system directory, with optional include/exclude glob patterns.

## Constructors

### DirectoryCatalog

_constructor_

```csharp
DirectoryCatalog(string path,string[] includes = null,string[] excludes = null)
```

Initializes a new instance that scans `path`. The directory to scan. Optional glob patterns limiting which files are included. Optional glob patterns for files to exclude.

## Properties

### Path

_property_

```csharp
string Path
```

Gets the root directory path scanned by this catalog.

