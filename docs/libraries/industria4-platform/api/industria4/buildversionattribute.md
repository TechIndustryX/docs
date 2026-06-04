---
title: "BuildVersionAttribute"
---

# BuildVersionAttribute

_public class_

Namespace: `Industria4`

Source: `src/Shared/Core/BuildVersionAttribute.cs`

## Summary

Assembly-level attribute that records the build version string injected by the CI pipeline.

## Constructors

### BuildVersionAttribute

_constructor_

```csharp
BuildVersionAttribute(string version)
```

Initializes a new instance of . The build version string.

## Properties

### Version

_property_

```csharp
string Version
```

Gets the build version string.

## Methods

### Get

_method_

```csharp
string Get(Assembly assembly = null)
```

Returns the build version recorded in the given assembly, or an empty string if the attribute is absent. The assembly to inspect. Defaults to the entry assembly when `null`. The build version string, or .

