---
title: "ZipCatalog"
---

# ZipCatalog

_public class_

Namespace: `Industria4.Hosting.Catalogs`

Source: `src/Shared/Hosting/Catalogs/ZipCatalog.cs`

## Summary

Catalog that extracts and loads assemblies from a ZIP archive, caching the extraction by content hash.

## Constructors

### ZipCatalog

_constructor_

```csharp
ZipCatalog(ILogger logger,Stream zipStream)
```

Initialises a new instance that reads from the provided `zipStream`. Logger for diagnostics, or `null`. A readable stream positioned at the beginning of the ZIP archive.

### ZipCatalog

_constructor_

```csharp
ZipCatalog(ILogger logger,string zipPath)
```

Initialises a new instance that reads from the ZIP file at `zipPath`. Logger for diagnostics, or `null`. The full path to the ZIP archive.

## Properties

### BaseZipDir

_property_

```csharp
string BaseZipDir
```

Gets the local file-system directory where ZIP archives are extracted.

