---
title: "HostBuilderExtensions"
---

# HostBuilderExtensions

_public class_

Namespace: `Microsoft.Extensions.Hosting`

Source: `src/Hosting/Hosting.Startup/HostBuilderExtensions.cs`

## Summary

Extension methods for configuring packages, catalogs, and resource files on an .

## Methods

### ConfigureCatalogs

_method_

```csharp
IHostBuilder ConfigureCatalogs(this IHostBuilder hostBuilder,bool isClient,params ICatalog[] catalogs)
```

Configures catalog services, module loading, and startup services for the specified catalogs. The host builder to configure. When , only entry-point client catalog contexts are activated at startup. The catalogs to register with the DI container and file providers.

### ConfigureExternalResourceFiles

_method_

```csharp
IHostBuilder ConfigureExternalResourceFiles(this IHostBuilder hostBuilder,bool isClient)
```

Registers the service and, for server hosts, the background service that initializes external resource assemblies. The host builder to configure. When , stores the instance in host properties for use by the file provider instead of starting a hosted service.

### ConfigurePackages

_method_

```csharp
IHostBuilder ConfigurePackages(this IHostBuilder hostBuilder,bool onlyChildProcess,bool isClient)
```

Configures the host builder to load packages, optionally filtering to child-process or client packages only. The host builder to configure. When , only configure if this process is a child process. When , target the client (browser) catalog entries.

### ConfigurePackages

_method_

```csharp
IHostBuilder ConfigurePackages(this IHostBuilder hostBuilder,IEnumerable<IPackagesProvider> additionalPackageProviders,bool onlyChildProcess,bool isClient)
```

Configures the host builder to load packages from optional additional providers with child-process and client filtering. The host builder to configure. Additional package providers; may be . When , only configure if this process is a child process. When , target the client (browser) catalog entries.

### ConfigurePackages

_method_

```csharp
IHostBuilder ConfigurePackages(this IHostBuilder hostBuilder,IEnumerable<IPackagesProvider> additionalPackageProviders)
```

Configures the host builder to load packages from the specified additional providers. The host builder to configure. Additional package providers to include alongside the built-in providers.

### GetCompositeFileProvider

_method_

```csharp
IFileProvider GetCompositeFileProvider(this IFileProvider fileProvider,IHostBuilder host)
```

Returns a composite file provider that combines the given provider with any catalog or external-resource file providers registered on the host builder. The base file provider to augment. The host builder whose properties are inspected for additional file providers.

