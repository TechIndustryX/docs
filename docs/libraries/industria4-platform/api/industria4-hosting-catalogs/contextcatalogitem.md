---
title: "ContextCatalogItem"
---

# ContextCatalogItem

_public class_

Namespace: `Industria4.Hosting.Catalogs`

Source: `src/Shared/Hosting/Catalogs/ContextCatalog.cs`

## Summary

Lightweight item that wraps a stream factory and its source location, used internally by before being promoted to a strongly-typed .

## Constructors

### ContextCatalogItem

_constructor_

```csharp
ContextCatalogItem(Func<Stream> getStream,string location)
```

Initialises a new instance with the given stream factory and location. Factory that opens a readable stream for the item. The file-system location of the item.

## Properties

### Location

_property_

```csharp
string Location
```

Gets the file-system location of this item.

## Methods

### GetStream

_method_

```csharp
Stream GetStream()
```

Opens and returns a stream for this item.

### ToCatalogItem

_method_

```csharp
CatalogItem ToCatalogItem(AssemblyLoadContext context)
```

Converts this item to a strongly-typed loaded into the given . The load context used for assembly loading. A typed catalog item, or `null` if the file cannot be loaded.

