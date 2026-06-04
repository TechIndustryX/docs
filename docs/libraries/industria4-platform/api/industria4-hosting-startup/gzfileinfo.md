---
title: "GzFileInfo"
---

# GzFileInfo

_public class_

Namespace: `Industria4.Hosting.Startup`

Source: `src/Hosting/Hosting.Startup/GzFileInfo.cs`

## Summary

An decorator that wraps an existing file and streams its content as gzip-compressed data.

## Constructors

### GzFileInfo

_constructor_

```csharp
GzFileInfo(IFileInfo innerFile)
```

Initializes a new instance of that wraps the given file and appends a `.gz` suffix to its name. The original file to compress.

## Properties

### Exists

_property_

```csharp
bool Exists
```

### IsDirectory

_property_

```csharp
bool IsDirectory
```

### LastModified

_property_

```csharp
DateTimeOffset LastModified
```

### Name

_property_

```csharp
string Name
```

Gets the file name (including extension) of the original file.

## Methods

### CreateReadStream

_method_

```csharp
Stream CreateReadStream()
```

Creates and returns a that compresses the inner file content on the fly.

