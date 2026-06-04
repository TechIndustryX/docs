---
title: "DatabasePackageCatalog"
---

# DatabasePackageCatalog

_public class_

Namespace: `Industria4.Hosting.Startup`

Source: `src/Hosting/Hosting.Startup/DatabasePackageCatalog.cs`

## Summary

An that discovers and loads packages registered in the database.

## Constructors

### DatabasePackageCatalog

_constructor_

```csharp
DatabasePackageCatalog(ILogger<DatabasePackageCatalog> logger,IDataAccessObject<PackageRead> packageDataAccessObject,IRepository<Package> packageRepository)
```

Initializes a new instance of with the required dependencies.

## Methods

### Dispose

_method_

```csharp
void Dispose()
```

Disposes all child catalogs (e.g. instances) created during the last load.

