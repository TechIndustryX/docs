---
title: "DatasetInfo"
---

# DatasetInfo

_public record_

Namespace: `TechIndustry.Hsds`

Source: `src/TechIndustry.Hsds/SimpleHsdsClient.cs`

## Summary

Holds the resolved path, HSDS identifier, and parent group ID of an HDF5 dataset. The HDF5 path of the dataset. The HSDS dataset identifier, or when the dataset does not exist. The HSDS group identifier of the parent, or when the parent was not found.

## Properties

### Id

_property_

```csharp
string? Id
```

Record parameter on DatasetInfo.

### ParentId

_property_

```csharp
string? ParentId
```

Record parameter on DatasetInfo.

### Path

_property_

```csharp
H5Path Path
```

Record parameter on DatasetInfo.

