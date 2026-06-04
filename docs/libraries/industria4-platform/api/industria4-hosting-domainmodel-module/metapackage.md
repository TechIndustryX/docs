---
title: "MetaPackage"
---

# MetaPackage

_public class_

Namespace: `Industria4.Hosting.DomainModel.Module`

Source: `src/Hosting/Hosting.DomainModel/Module/MetaPackage.cs`

## Summary

Describes the metadata of a package as read from a `package.json` manifest.

## Properties

### DefaultConfiguration

_property_

```csharp
JToken DefaultConfiguration
```

Gets or sets the default JSON configuration for this package.

### EntryPoint

_property_

```csharp
string EntryPoint
```

Gets or sets the assembly entry-point name (without extension) that represents the main module of this package.

### Name

_property_

```csharp
string Name
```

Gets or sets the package display name.

### TargetProcessNames

_property_

```csharp
string[] TargetProcessNames
```

Gets or sets the names of the host processes that may load this package.

### Type

_property_

```csharp
MetaPackageType Type
```

Gets or sets whether this package targets the server or the client host.

### Version

_property_

```csharp
string Version
```

Gets or sets the package version string.

