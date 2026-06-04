---
title: "Package"
---

# Package

_public class_

Namespace: `Industria4.Hosting.DomainModel.Module`

Source: `src/Hosting/Hosting.DomainModel/Module/Package.cs`

## Summary

Represents a deployable package that can be loaded by the Industria 4 host.

## Constructors

### Package

_constructor_

```csharp
Package(string id,string path)
```

Initializes a new instance of with the specified identifier and manifest path. The unique identifier for the package. The file-system path to the package manifest.

## Properties

### DisabledModules

_property_

```csharp
IList<string> DisabledModules
```

Gets the list of module names that have been explicitly disabled for this package.

### Id

_property_

```csharp
string Id
```

Gets the unique identifier of this package.

### IsChildProcess

_property_

```csharp
bool IsChildProcess
```

Gets a value indicating whether the current process is running as a child (module) process.

### IsClient

_property_

```csharp
bool IsClient
```

Gets or sets a value indicating whether this package targets the client (browser) host.

### Path

_property_

```csharp
string Path
```

Gets the file-system path to the package manifest.

### TargetProcessNames

_property_

```csharp
IList<string> TargetProcessNames
```

Gets the list of host-process names that may load this package.

### Version

_property_

```csharp
Version Version
```

Gets or sets the package version.

## Methods

### GetCanUsePackage

_method_

```csharp
bool GetCanUsePackage()
```

Determines whether this package can be used by the current process based on its . if the current process is allowed to load this package; otherwise .

### LoadMetaPackageAsync

_method_

```csharp
Task LoadMetaPackageAsync(Stream stream)
```

Loads package metadata from the provided stream containing a `package.json` manifest. A readable stream of the JSON manifest.

