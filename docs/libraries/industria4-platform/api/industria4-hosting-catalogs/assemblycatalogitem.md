---
title: "AssemblyCatalogItem"
---

# AssemblyCatalogItem

_public class_

Namespace: `Industria4.Hosting.Catalogs`

Source: `src/Shared/Hosting/Catalogs/ICatalog.cs`

## Summary

Catalog item that wraps a lazily-loaded and its optional satellite assemblies.

## Constructors

### AssemblyCatalogItem

_constructor_

```csharp
AssemblyCatalogItem(Func<Assembly> assembly,string location)
```

Initializes a new item for the given assembly factory and location. A factory function that loads the assembly on demand. The file-system location of the assembly.

## Properties

### SatelliteLocations

_property_

```csharp
IEnumerable<string> SatelliteLocations
```

Gets the locations of all satellite assemblies attached to this item.

## Methods

### AddSatellite

_method_

```csharp
void AddSatellite(CultureInfo culture,AssemblyCatalogItem item)
```

Registers a satellite assembly for a specific culture. The culture the satellite assembly targets. The satellite catalog item to attach.

### GetAssembly

_method_

```csharp
Assembly GetAssembly()
```

Loads and returns the assembly, also loading any registered satellite assemblies. The loaded .

