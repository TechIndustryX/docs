---
title: "ExternalResourcesFileProvider"
---

# ExternalResourcesFileProvider

_public class_

Namespace: `Industria4.Hosting.Startup`

Source: `src/Hosting/Hosting.Startup/ExternalResourcesFileProvider.cs`

## Summary

An that serves externally compiled resource assembly files.

## Constructors

### ExternalResourcesFileProvider

_constructor_

```csharp
ExternalResourcesFileProvider(ExternalResourcesFiles externalResourcesFiles)
```

Initializes a new instance of with the given file aggregator. The instance that discovers resource files.

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

