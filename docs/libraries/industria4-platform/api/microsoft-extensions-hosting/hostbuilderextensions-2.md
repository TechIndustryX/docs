---
title: "HostBuilderExtensions"
---

# HostBuilderExtensions

_public class_

Namespace: `Microsoft.Extensions.Hosting`

Source: `src/Shared/Hosting.Server/HostBuilderExtensions.cs`

## Summary

Extensions for

## Methods

### ConfigureStartupServices

_method_

```csharp
IHostBuilder ConfigureStartupServices(this IHostBuilder hostBuilder,Func<AssemblyCatalogItem,bool> filter,params ICatalog[] catalogs)
```

Finds all assemblies which implements and runs the configuration for the passed

### SetDefaultCultureInfo

_method_

```csharp
IHostBuilder SetDefaultCultureInfo(this IHostBuilder hostBuilder)
```

Set default language for the thread to en

### UseSerilogWithConfiguration

_method_

```csharp
IHostBuilder UseSerilogWithConfiguration(this IHostBuilder hostBuilder)
```

Configures Serilog as logger, adds it to the service list and configures Serilog from configuration

