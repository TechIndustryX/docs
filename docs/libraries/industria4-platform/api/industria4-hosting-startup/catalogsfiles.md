---
title: "CatalogsFiles"
---

# CatalogsFiles

_public class_

Namespace: `Industria4.Hosting.Startup`

Source: `src/Hosting/Hosting.Startup/CatalogsFiles.cs`

## Summary

Aggregates static file and assembly entries from all registered instances for use by file providers.

## Constructors

### CatalogsFiles

_constructor_

```csharp
CatalogsFiles(IEnumerable<ICatalog> catalogs)
```

Initializes a new instance of with the provided catalog instances. The catalogs whose file entries will be aggregated.

## Methods

### GetFileInfoAsync

_method_

```csharp
Task<IFileInfo> GetFileInfoAsync(string subpath)
```

Returns the for the specified virtual path, or a not-found descriptor if absent. The virtual path to look up.

