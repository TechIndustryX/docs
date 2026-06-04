---
title: "AssemblyProviderBase"
---

# AssemblyProviderBase

_public class_

Namespace: `Industria4.Hosting.WebApp.Startup`

Source: `src/Hosting/Hosting.WebApp/Startup/AssemblyProviderBase.cs`

## Summary

Base class that provides assembly bytes (DLL and optional PDB) from a remote source via JS interop.

## Constructors

### AssemblyProviderBase

_constructor_

```csharp
AssemblyProviderBase(IJSRuntime jsRuntime)
```

Initializes a new instance of .

## Methods

### GetAssemblyAsync

_method_

```csharp
Task<(IJSStreamReference DllBytes,IJSStreamReference PdbBytes)> GetAssemblyAsync(string assemblyName)
```

Returns the DLL and optional PDB byte streams for the specified assembly name. The simple name of the assembly to retrieve.

### TryDownloadFileBytes

_method_

```csharp
Task<IJSStreamReference> TryDownloadFileBytes(string uri,string hash)
```

Attempts to download file bytes from the given URI, returning on failure. The relative or absolute URI of the file. An integrity hash passed to the browser for cache validation.

