---
title: "Industria4.Hosting.Startup"
---

# Industria4.Hosting.Startup

This namespace contains 27 public API types.

## Types

- [CatalogsFileProvider](./catalogsfileprovider.md) _class_ - An that serves static files from the catalog entries of all registered instances.
- [CatalogsFiles](./catalogsfiles.md) _class_ - Aggregates static file and assembly entries from all registered instances for use by file providers.
- [DatabasePackageCatalog](./databasepackagecatalog.md) _class_ - An that discovers and loads packages registered in the database.
- [DatabasePackagesProvider](./databasepackagesprovider.md) _class_ - An that retrieves packages and their catalogs from the database.
- [EnvironmentPackagesProvider](./environmentpackagesprovider.md) _class_ - An that discovers packages from paths listed in the `INDUSTRIA4_ADDITIONALPACKAGES` environment variable.
- [ExternalResourcesFileProvider](./externalresourcesfileprovider.md) _class_ - An that serves externally compiled resource assembly files.
- [ExternalResourcesFiles](./externalresourcesfiles.md) _class_ - Discovers and serves externally compiled satellite resource assemblies from the `resources` folder.
- [ExternalResourcesService](./externalresourcesservice.md) _class_
- [FolderPackagesProvider](./folderpackagesprovider.md) _class_ - An that discovers packages from subdirectories inside the `AdditionalPackages` folder.
- [GzFileInfo](./gzfileinfo.md) _class_ - An decorator that wraps an existing file and streams its content as gzip-compressed data.
- [IPackageCatalogContext](./ipackagecatalogcontext.md) _interface_ - Provides contextual information about the current catalog entry point and host type.
- [IPackagesProvider](./ipackagesprovider.md) _interface_ - Defines the contract for providing installed packages and their associated catalogs.
- [License](./license.md) _class_ - Represents a signed license record that ties a machine code to a set of package names and an optional expiration date.
- [LicenseGenerator](./licensegenerator.md) _class_ - Generates and validates Industria4 license keys using asymmetric cryptography.
- [LicenseManager](./licensemanager.md) _class_ - Manages the loading, validation, and lifecycle of the Industria4 runtime license.
- [ModulesLoaderHostedService](./modulesloaderhostedservice.md) _class_ - A hosted service that triggers module loading when the application starts and license is valid.
- [PackageAssemblyCatalog](./packageassemblycatalog.md) _class_ - An that wraps a single assembly and exposes its catalog items tagged with package metadata.
- [PackageAssemblyCatalogItem](./packageassemblycatalogitem.md) _class_
- [PackageAssemblySymbolCatalogItem](./packageassemblysymbolcatalogitem.md) _class_
- [PackageCatalogContextExtensions](./packagecatalogcontextextensions.md) _class_
- [PackageConfigurationSourceBase](./packageconfigurationsourcebase.md) _class_ - Base class for configuration sources that serialize package configurations into a JSON configuration stream.
- [PackageDirectoryCatalog](./packagedirectorycatalog.md) _class_ - A that tags all discovered items with package metadata.
- [PackageEnvironment](./packageenvironment.md) _class_ - Encapsulates an isolated used to discover and initialize packages before the main application host starts.
- [PackageFileCatalogItem](./packagefilecatalogitem.md) _class_
- [PackagesConfigurationSource](./packagesconfigurationsource.md) _class_ - A that loads packages from all registered instances.
- [PackageZipCatalog](./packagezipcatalog.md) _class_ - A that tags all discovered items with package metadata.
- [RequestItem](./requestitem.md) _class_
