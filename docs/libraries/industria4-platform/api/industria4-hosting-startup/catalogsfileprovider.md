---
title: "CatalogsFileProvider"
---

# CatalogsFileProvider

_public class_

Namespace: `Industria4.Hosting.Startup`

Source: `src/Hosting/Hosting.Startup/CatalogsFileProvider.cs`

## Summary

An that serves static files from the catalog entries of all registered instances.

## Constructors

### CatalogsFileProvider

_constructor_

```csharp
CatalogsFileProvider(CatalogsFiles catalogsFiles)
```

Initializes a new instance of with the given catalog file aggregator. The instance that aggregates catalog file entries.

## Methods

### GetDirectoryContents

_method_

```csharp
IDirectoryContents GetDirectoryContents(string subpath)
```

### GetFileInfo

_method_

```csharp
IFileInfo GetFileInfo(string subpath)
```

### Watch

_method_

```csharp
IChangeToken Watch(string filter)
```

