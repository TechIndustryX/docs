---
title: "DefaultAssemblyDownloader"
---

# DefaultAssemblyDownloader

_public class_

Namespace: `Industria4.Hosting.WebApp.Startup`

Source: `src/Hosting/Hosting.WebApp/Startup/AssemblyProviderBase.cs`

## Summary

Downloads assemblies from the `/_framework/_bin/` endpoint exposed by the Hosting server.

## Constructors

### DefaultAssemblyDownloader

_constructor_

```csharp
DefaultAssemblyDownloader(HttpClient httpClient,IJSRuntime jsRuntime)
```

Initializes a new instance of with the provided HTTP client and JS runtime.

## Methods

### GetAssemblyAsync

_method_

```csharp
Task<(IJSStreamReference DllBytes,IJSStreamReference PdbBytes)> GetAssemblyAsync(string assemblyName)
```

