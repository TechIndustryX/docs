---
title: "SimpleHsdsClient"
---

# SimpleHsdsClient

_public class_

Namespace: `TechIndustry.Hsds`

Source: `src/TechIndustry.Hsds/SimpleHsdsClient.cs`

## Summary

High-level HSDS client that wraps the generated with convenience operations for domains, groups, datasets, attributes, and binary values.

## Properties

### Domain

_property_

```csharp
string Domain
```

Gets or sets the HSDS domain path used as the default target for all operations.

### InnerClient

_property_

```csharp
HsdsClient InnerClient
```

Gets the underlying generated for direct low-level access.

## Methods

### DeleteDatasetAsync

_method_

```csharp
Task DeleteDatasetAsync(H5Path h5Path,CancellationToken token = default)
```

Deletes the dataset at `h5Path` and its parent link. The HDF5 path of the dataset to delete. Cancellation token.

### DeleteDomainAsync

_method_

```csharp
Task DeleteDomainAsync(string domain,CancellationToken token = default)
```

Deletes the specified domain from the HSDS server. Ignores 404/410 responses. The domain path to delete. Cancellation token.

### DeleteGroupAndChildrenAsync

_method_

```csharp
Task DeleteGroupAndChildrenAsync(H5Path path,CancellationToken token = default)
```

Recursively deletes the group at `path` together with all its child datasets and groups. The HDF5 path of the group to delete. Cancellation token.

### DeleteGroupAttributeAsync

_method_

```csharp
Task DeleteGroupAttributeAsync(string groupId,string name,CancellationToken token = default)
```

Deletes a named attribute from an HDF5 group. The HSDS group identifier. The attribute name to delete. Cancellation token.

### EnsureDomainAsync

_method_

```csharp
Task<string> EnsureDomainAsync(CancellationToken token = default)
```

Ensures the configured exists on the HSDS server, creating it if necessary. Cancellation token. The root group ID of the domain.

### EnsureGroupAsync

_method_

```csharp
Task<string> EnsureGroupAsync(H5Path h5Path,CancellationToken token = default)
```

Ensures all groups along `h5Path` exist, creating any missing intermediate groups. The target path. Must contain at least one segment. Cancellation token. The HSDS group ID of the leaf group. Thrown when `h5Path` has no segments.

### GetDatasetAsync

_method_

```csharp
Task<DatasetInfo> GetDatasetAsync(H5Path h5Path,CancellationToken token = default)
```

Resolves the dataset at the specified HDF5 path, returning its ID and parent group ID when found. The path to look up. Must contain at least one segment. Cancellation token. A whose `Id` is when the dataset does not exist. Thrown when `h5Path` has no segments.

### GetDatasetAttributeAsync

_method_

```csharp
Task<JsonElement?> GetDatasetAttributeAsync(string datasetId,string name,CancellationToken token = default)
```

Returns the value of a named attribute on an HDF5 dataset. The HSDS dataset identifier. The attribute name. Cancellation token.

### GetDomainsAsync

_method_

```csharp
Task<GetDomainsResponse> GetDomainsAsync(string? domain = null,CancellationToken token = default)
```

Lists all domains under the specified parent domain path. Parent domain path; defaults to `/` (root) when . Cancellation token.

### GetGroupAsync

_method_

```csharp
Task<GroupInfo> GetGroupAsync(H5Path h5Path,CancellationToken token = default)
```

Resolves the group at the specified HDF5 path, returning its ID and parent ID when found. The path to look up. Cancellation token. A whose `Id` is when the group does not exist.

### GetGroupAttributeAsync

_method_

```csharp
Task<JsonElement?> GetGroupAttributeAsync(string groupId,string name,CancellationToken token = default)
```

Returns the value of a named attribute on an HDF5 group. The HSDS group identifier. The attribute name. Cancellation token.

### RenameDatasetAsync

_method_

```csharp
Task<DatasetInfo> RenameDatasetAsync(H5Path source,H5Path target,CancellationToken token = default)
```

Renames (moves) a dataset by relinking it from `source` to `target`. The current HDF5 path of the dataset. The new HDF5 path for the dataset. Cancellation token. A reflecting the new path and existing dataset ID.

### SetDatasetAttributeAsync

_method_

```csharp
Task SetDatasetAttributeAsync<T>(string datasetId,string name,T value,CancellationToken token = default)
```

Sets a typed attribute on an HDF5 dataset. The HSDS dataset identifier. The attribute name. The attribute value. Cancellation token.

### SetGroupAttributeAsync

_method_

```csharp
Task SetGroupAttributeAsync<T>(string groupId,string name,T value,CancellationToken token = default)
```

Sets a typed attribute on an HDF5 group. The HSDS group identifier. The attribute name. The attribute value. Cancellation token.

