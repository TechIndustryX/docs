---
title: "PluginsDiscover"
---

# PluginsDiscover

_public class_

Namespace: `Industria4.Hosting`

Source: `src/Shared/Hosting/PluginsDiscover.cs`

## Summary

Utility class for discovering and instantiating plug-in implementations found in external assemblies on disk.

## Methods

### FindPlugins

_method_

```csharp
IEnumerable FindPlugins(Type type,string path,string searchPattern)
```

Loads assemblies matching `searchPattern` from `path` and returns all instantiated classes assignable to `type`. The base type or interface to filter by. The directory to search. A file-name pattern such as `*.dll`. An enumerable of object instances assignable to `type`.

### FindPlugins

_method_

```csharp
IEnumerable<T> FindPlugins<T>(string path,string searchPattern)
```

Loads assemblies matching `searchPattern` from `path` and returns all instantiated implementations of `T`. The interface or base class to search for. The directory to search. A file-name pattern such as `*.dll`. An enumerable of `T` instances found in the matching assemblies.

