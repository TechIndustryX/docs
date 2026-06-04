---
title: "FileCatalogItem"
---

# FileCatalogItem

_public class_

Namespace: `Industria4.Hosting.Catalogs`

Source: `src/Shared/Hosting/Catalogs/ICatalog.cs`

## Summary

Catalog item that represents a raw file stream accessible to the catalog loader.

## Constructors

### FileCatalogItem

_constructor_

```csharp
FileCatalogItem(Func<Stream> getStream,string location)
```

Initializes a new instance for the file at `location`. Factory that opens a readable stream for the file. The file-system location of the item.

## Methods

### GetStream

_method_

```csharp
Stream GetStream()
```

Opens and returns a stream for the file.

