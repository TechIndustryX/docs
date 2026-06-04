---
title: "PackageConfigurationSource"
---

# PackageConfigurationSource

_public class_

Namespace: `Industria4.Hosting.WebApp.Startup`

Source: `src/Hosting/Hosting.WebApp/Startup/PackageConfigurationSource.cs`

## Summary

A JSON configuration source that fetches package configurations from the server via .

## Constructors

### PackageConfigurationSource

_constructor_

```csharp
PackageConfigurationSource(ModuleClient moduleClient)
```

Initializes a new instance of with the provided module client.

## Methods

### InitAsync

_method_

```csharp
Task InitAsync()
```

Downloads and caches the package configurations from the server.

