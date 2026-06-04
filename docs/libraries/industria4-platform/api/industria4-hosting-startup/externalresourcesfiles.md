---
title: "ExternalResourcesFiles"
---

# ExternalResourcesFiles

_public class_

Namespace: `Industria4.Hosting.Startup`

Source: `src/Hosting/Hosting.Startup/ExternalResourcesFiles.cs`

## Summary

Discovers and serves externally compiled satellite resource assemblies from the `resources` folder.

## Constructors

### ExternalResourcesFiles

_constructor_

```csharp
ExternalResourcesFiles()
```

Initializes a new instance of .

## Methods

### GetFileInfoAsync

_method_

```csharp
Task<IFileInfo> GetFileInfoAsync(string subpath)
```

Returns the for the specified virtual path, or a not-found descriptor if absent. The virtual path to look up.

### InitAsync

_method_

```csharp
Task InitAsync()
```

Triggers initialization of the resource file discovery.

### ResolveAssembly

_method_

```csharp
Assembly ResolveAssembly(AssemblyLoadContext context,AssemblyName assemblyName)
```

Attempts to resolve and load an assembly by name from the discovered resource files. The assembly load context to use for loading. The name of the assembly to resolve. The loaded , or if not found.

