---
title: "Industria4.Hosting.Catalogs"
---

# Industria4.Hosting.Catalogs

This namespace contains 14 public API types.

## Types

- [AssemblyCatalog](./assemblycatalog.md) _class_ - Catalog that exposes a single and its PDB symbols, if present.
- [AssemblyCatalogItem](./assemblycatalogitem.md) _class_ - Catalog item that wraps a lazily-loaded and its optional satellite assemblies.
- [AssemblySymbolCatalogItem](./assemblysymbolcatalogitem.md) _class_ - Catalog item that represents a PDB symbol file paired with an assembly.
- [CatalogContext](./catalogcontext.md) _class_ - Carries contextual information about the catalog being loaded, primarily its location.
- [CatalogItem](./catalogitem.md) _class_ - Base class for all items discovered by an .
- [ContextCatalog](./contextcatalog.md) _class_ - Abstract base catalog that loads assemblies into an and resolves satellite assemblies.
- [ContextCatalogItem](./contextcatalogitem.md) _class_ - Lightweight item that wraps a stream factory and its source location, used internally by before being promoted to a strongly-typed .
- [DirectoryCatalog](./directorycatalog.md) _class_ - Catalog that discovers assemblies and files in a file-system directory, with optional include/exclude glob patterns.
- [FileCatalogItem](./filecatalogitem.md) _class_ - Catalog item that represents a raw file stream accessible to the catalog loader.
- [ICatalog](./icatalog.md) _interface_ - Provides an enumerable list of catalog items that can be loaded into the application.
- [ICatalogContextAccessor](./icatalogcontextaccessor.md) _interface_ - Provides access to the current for the active catalog scope.
- [MultiCatalog](./multicatalog.md) _class_ - Aggregates multiple instances and exposes their items as a single enumerable.
- [TypesLoader](./typesloader.md) _class_ - Loads types from one or more sources and filters them by a target interface or base class.
- [ZipCatalog](./zipcatalog.md) _class_ - Catalog that extracts and loads assemblies from a ZIP archive, caching the extraction by content hash.
