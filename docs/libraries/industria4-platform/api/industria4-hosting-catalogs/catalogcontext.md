---
title: "CatalogContext"
---

# CatalogContext

_public class_

Namespace: `Industria4.Hosting.Catalogs`

Source: `src/Shared/Hosting/Catalogs/ICatalogContextAccessor.cs`

## Summary

Carries contextual information about the catalog being loaded, primarily its location.

## Constructors

### CatalogContext

_constructor_

```csharp
CatalogContext(string location)
```

Initializes a new catalog context for the given location. The location of the catalog. Must not be `null`.

## Properties

### Location

_property_

```csharp
string Location
```

Gets the catalog location (file-system path or virtual identifier).

