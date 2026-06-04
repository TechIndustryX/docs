---
title: "TypesLoader"
---

# TypesLoader

_public class_

Namespace: `Industria4.Hosting.Catalogs`

Source: `src/Shared/Hosting/Catalogs/TypesLoader.cs`

## Summary

Loads types from one or more sources and filters them by a target interface or base class.

## Constructors

### TypesLoader

_constructor_

```csharp
TypesLoader(IEnumerable<ICatalog> catalogs)
```

Initializes a new instance with the given catalogs and no logger. The catalogs to search.

### TypesLoader

_constructor_

```csharp
TypesLoader(ILogger logger,IEnumerable<ICatalog> catalogs)
```

Initializes a new instance with a logger and the given catalogs. Logger for diagnostics, or `null`. The catalogs to search.

## Properties

### Filter

_property_

```csharp
Func<AssemblyCatalogItem,bool> Filter
```

Gets or sets a predicate that controls which assembly catalog items are considered during loading.

## Methods

### Dispose

_method_

```csharp
void Dispose()
```

