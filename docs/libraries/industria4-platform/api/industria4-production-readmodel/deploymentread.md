---
title: "DeploymentRead"
---

# DeploymentRead

_public class_

Namespace: `Industria4.Production.ReadModel`

Source: `src/Production/Production.ReadModel/DeploymentRead.cs`

## Summary

Read model representing a deployment as returned by the Production query stack.

## Properties

### CompositionDescription

_property_

```csharp
string CompositionDescription
```

Gets or sets the default-language description of the associated composition.

### CompositionId

_property_

```csharp
string CompositionId
```

Gets or sets the identifier of the composition this deployment is based on.

### Description

_property_

```csharp
string Description
```

Gets or sets the default-language description of this deployment.

### Id

_property_

```csharp
string Id
```

Gets or sets the unique deployment identifier.

### IsDeleted

_property_

```csharp
bool IsDeleted
```

Gets or sets a value indicating whether this deployment has been soft-deleted.

### Metadata

_property_

```csharp
Dictionary<string,object> Metadata
```

Gets or sets the deserialized metadata dictionary.

### MetadataJson

_property_

```csharp
string MetadataJson
```

Gets or sets the raw JSON metadata string (not serialized to API responses).

### Tags

_property_

```csharp
Dictionary<string,string> Tags
```

Gets or sets the tag dictionary for filtering and classification.

### TagsJson

_property_

```csharp
string TagsJson
```

Gets or sets the raw JSON tags string (not serialized to API responses).

### Version

_property_

```csharp
string Version
```

Gets or sets the deployment version string.

