---
title: HSDS .NET
---

# HSDS .NET API Reference

Source repository: `TechIndustryX/hsds-dotnet`

## .NET API

Detected 10 C# types and 54 members across 2 namespaces.

### `Microsoft.Extensions.DependencyInjection`

#### `ServiceCollectionExtensions`

_public class_

Source: `src/TechIndustry.Hsds/ServiceCollectionExtensions.cs`

Extension methods for registering HSDS client services in the dependency-injection container.

Members:

- `IHttpClientBuilder AddHsdsClient(this IServiceCollection services,Uri uri)` _method_ — Registers and configures its to target `uri`. The service collection to add the client to. The base URI of the HSDS server. The for further HTTP client configuration.

### `TechIndustry.Hsds`

#### `BinaryExtensions`

_internal class_

Source: `src/TechIndustry.Hsds/BinaryExtensions.cs`

Members:

- `IEnumerable&lt;bool&gt; ReadBooleanEnumerable(this BinaryReader reader)` _method_
- `IEnumerable&lt;byte&gt; ReadByteEnumerable(this BinaryReader reader)` _method_
- `IEnumerable&lt;double&gt; ReadDoubleEnumerable(this BinaryReader reader)` _method_
- `IEnumerable&lt;T&gt; ReadEnumerable&lt;T&gt;(this BinaryReader reader)` _method_
- `IEnumerable&lt;short&gt; ReadInt16Enumerable(this BinaryReader reader)` _method_
- `IEnumerable&lt;int&gt; ReadInt32Enumerable(this BinaryReader reader)` _method_
- `IEnumerable&lt;long&gt; ReadInt64Enumerable(this BinaryReader reader)` _method_
- `IEnumerable&lt;float&gt; ReadSingleEnumerable(this BinaryReader reader)` _method_
- `void WriteEnumerable&lt;T&gt;(this BinaryWriter writer,IEnumerable&lt;T&gt; values)` _method_
- `void WriteEnumerable(this BinaryWriter writer,Type type,IEnumerable values)` _method_

#### `DatasetInfo`

_public record_

Source: `src/TechIndustry.Hsds/SimpleHsdsClient.cs`

Holds the resolved path, HSDS identifier, and parent group ID of an HDF5 dataset. The HDF5 path of the dataset. The HSDS dataset identifier, or when the dataset does not exist. The HSDS group identifier of the parent, or when the parent was not found.

Members:

- `string? Id` _property_ — Record parameter on DatasetInfo.
- `string? ParentId` _property_ — Record parameter on DatasetInfo.
- `H5Path Path` _property_ — Record parameter on DatasetInfo.

#### `GetDomainsItemResponse`

_public record_

Source: `src/TechIndustry.Hsds/Models.cs`

Describes a single HSDS domain entry within a . The domain name. The root group ID of the domain. The owner of the domain. The domain class identifier. Unix epoch timestamp (seconds) when the domain was created. Unix epoch timestamp (seconds) of the last modification.

Members:

- `string Class` _property_ — Record parameter on GetDomainsItemResponse.
- `double Created` _property_ — Record parameter on GetDomainsItemResponse.
- `double LastModified` _property_ — Record parameter on GetDomainsItemResponse.
- `string Name` _property_ — Record parameter on GetDomainsItemResponse.
- `string Owner` _property_ — Record parameter on GetDomainsItemResponse.
- `string Root` _property_ — Record parameter on GetDomainsItemResponse.

#### `GetDomainsResponse`

_public record_

Source: `src/TechIndustry.Hsds/Models.cs`

Response returned by the HSDS `GET /domains` endpoint listing available domains. The array of domain descriptors returned by the server.

Members:

- `GetDomainsItemResponse[] Domains` _property_ — Record parameter on GetDomainsResponse.

#### `GroupInfo`

_public record_

Source: `src/TechIndustry.Hsds/SimpleHsdsClient.cs`

Holds the resolved path, HSDS identifier, and parent group ID of an HDF5 group. The HDF5 path of the group. The HSDS group identifier, or when the group does not exist. The HSDS group identifier of the parent, or when the parent was not found.

Members:

- `string? Id` _property_ — Record parameter on GroupInfo.
- `string? ParentId` _property_ — Record parameter on GroupInfo.
- `H5Path Path` _property_ — Record parameter on GroupInfo.

#### `H5Path`

_public struct_

Source: `src/TechIndustry.Hsds/H5Path.cs`

Represents an immutable HDF5 hierarchical path composed of one or more name segments. Paths are normalized on construction and compared case-insensitively.

Members:

- `H5Path(string path)` _constructor_ — Initializes a new by parsing and normalizing `path`. A slash- or backslash-separated path string. Must not be null or whitespace. Thrown when `path` is null or whitespace.
- `H5Path Append(string segment)` _method_ — Returns a new with `segment` appended. The path segment to append. Must not be null or whitespace. A new one level deeper than this path. Thrown when `segment` is null or whitespace.
- `bool Equals(H5Path other)` _method_ — Determines whether this path equals `other`, using case-insensitive segment comparison. The path to compare against. if all segments match; otherwise .
- `bool Equals(object? obj)` _method_
- `int GetHashCode()` _method_
- `H5Path? GetParent()` _method_ — Returns the parent path by removing the last segment, or if this path has no segments. The parent , or for a root-level path.
- `implicit operator H5Path(string path)` _method_ — Implicitly converts a path string to an . The path string to convert.
- `string ToString()` _method_
- `string FullPath` _property_ — Gets the full absolute path string, always starting with `/`.
- `IReadOnlyList&lt;string&gt; Segments` _property_ — Gets the individual name segments that make up this path.

#### `HttpClientExtensions`

_internal class_

Source: `src/TechIndustry.Hsds/HttpClientExtensions.cs`

Members:

- `Task EnsureExceptionAsync(this HttpResponseMessage response)` _method_

#### `ObjectExtensions`

_public class_

Source: `src/TechIndustry.Hsds/ObjectExtensions.cs`

Extension methods for converting .NET values to HSDS/HDF5-compatible representations.

Members:

- `object GetHDF5DataType(this object value)` _method_ — Returns the HDF5 type descriptor object for the runtime type of `value`. The value whose type is inspected. An anonymous object representing the HDF5 type descriptor, suitable for JSON serialization. Thrown when `value` is .
- `object GetHDF5DataType(this Type type)` _method_ — Returns the HDF5 type descriptor object for a given CLR `type`. The CLR type to map. Supported: , , , , , , , , , , , . An anonymous object representing the HDF5 type descriptor, suitable for JSON serialization. Thrown when `type` has no HDF5 mapping.
- `DateTimeOffset ToDateTimeOffset(this double value)` _method_ — Converts a Unix epoch value (seconds since epoch as a ) to a . Seconds since Unix epoch.

#### `SimpleHsdsClient`

_public class_

Source: `src/TechIndustry.Hsds/SimpleHsdsClient.cs`

High-level HSDS client that wraps the generated with convenience operations for domains, groups, datasets, attributes, and binary values.

Members:

- `Task DeleteDatasetAsync(H5Path h5Path,CancellationToken token = default)` _method_ — Deletes the dataset at `h5Path` and its parent link. The HDF5 path of the dataset to delete. Cancellation token.
- `Task DeleteDomainAsync(string domain,CancellationToken token = default)` _method_ — Deletes the specified domain from the HSDS server. Ignores 404/410 responses. The domain path to delete. Cancellation token.
- `Task DeleteGroupAndChildrenAsync(H5Path path,CancellationToken token = default)` _method_ — Recursively deletes the group at `path` together with all its child datasets and groups. The HDF5 path of the group to delete. Cancellation token.
- `Task DeleteGroupAttributeAsync(string groupId,string name,CancellationToken token = default)` _method_ — Deletes a named attribute from an HDF5 group. The HSDS group identifier. The attribute name to delete. Cancellation token.
- `Task&lt;string&gt; EnsureDomainAsync(CancellationToken token = default)` _method_ — Ensures the configured exists on the HSDS server, creating it if necessary. Cancellation token. The root group ID of the domain.
- `Task&lt;string&gt; EnsureGroupAsync(H5Path h5Path,CancellationToken token = default)` _method_ — Ensures all groups along `h5Path` exist, creating any missing intermediate groups. The target path. Must contain at least one segment. Cancellation token. The HSDS group ID of the leaf group. Thrown when `h5Path` has no segments.
- `Task&lt;DatasetInfo&gt; GetDatasetAsync(H5Path h5Path,CancellationToken token = default)` _method_ — Resolves the dataset at the specified HDF5 path, returning its ID and parent group ID when found. The path to look up. Must contain at least one segment. Cancellation token. A whose `Id` is when the dataset does not exist. Thrown when `h5Path` has no segments.
- `Task&lt;JsonElement?&gt; GetDatasetAttributeAsync(string datasetId,string name,CancellationToken token = default)` _method_ — Returns the value of a named attribute on an HDF5 dataset. The HSDS dataset identifier. The attribute name. Cancellation token.
- `Task&lt;GetDomainsResponse&gt; GetDomainsAsync(string? domain = null,CancellationToken token = default)` _method_ — Lists all domains under the specified parent domain path. Parent domain path; defaults to `/` (root) when . Cancellation token.
- `Task&lt;GroupInfo&gt; GetGroupAsync(H5Path h5Path,CancellationToken token = default)` _method_ — Resolves the group at the specified HDF5 path, returning its ID and parent ID when found. The path to look up. Cancellation token. A whose `Id` is when the group does not exist.
- `Task&lt;JsonElement?&gt; GetGroupAttributeAsync(string groupId,string name,CancellationToken token = default)` _method_ — Returns the value of a named attribute on an HDF5 group. The HSDS group identifier. The attribute name. Cancellation token.
- `Task&lt;DatasetInfo&gt; RenameDatasetAsync(H5Path source,H5Path target,CancellationToken token = default)` _method_ — Renames (moves) a dataset by relinking it from `source` to `target`. The current HDF5 path of the dataset. The new HDF5 path for the dataset. Cancellation token. A reflecting the new path and existing dataset ID.
- `Task SetDatasetAttributeAsync&lt;T&gt;(string datasetId,string name,T value,CancellationToken token = default)` _method_ — Sets a typed attribute on an HDF5 dataset. The HSDS dataset identifier. The attribute name. The attribute value. Cancellation token.
- `Task SetGroupAttributeAsync&lt;T&gt;(string groupId,string name,T value,CancellationToken token = default)` _method_ — Sets a typed attribute on an HDF5 group. The HSDS group identifier. The attribute name. The attribute value. Cancellation token.
- `string Domain` _property_ — Gets or sets the HSDS domain path used as the default target for all operations.
- `HsdsClient InnerClient` _property_ — Gets the underlying generated for direct low-level access.

