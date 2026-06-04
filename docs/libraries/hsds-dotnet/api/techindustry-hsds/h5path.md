---
title: "H5Path"
---

# H5Path

_public struct_

Namespace: `TechIndustry.Hsds`

Source: `src/TechIndustry.Hsds/H5Path.cs`

## Summary

Represents an immutable HDF5 hierarchical path composed of one or more name segments. Paths are normalized on construction and compared case-insensitively.

## Constructors

### H5Path

_constructor_

```csharp
H5Path(string path)
```

Initializes a new by parsing and normalizing `path`. A slash- or backslash-separated path string. Must not be null or whitespace. Thrown when `path` is null or whitespace.

## Properties

### FullPath

_property_

```csharp
string FullPath
```

Gets the full absolute path string, always starting with `/`.

### Segments

_property_

```csharp
IReadOnlyList<string> Segments
```

Gets the individual name segments that make up this path.

## Methods

### Append

_method_

```csharp
H5Path Append(string segment)
```

Returns a new with `segment` appended. The path segment to append. Must not be null or whitespace. A new one level deeper than this path. Thrown when `segment` is null or whitespace.

### Equals

_method_

```csharp
bool Equals(H5Path other)
```

Determines whether this path equals `other`, using case-insensitive segment comparison. The path to compare against. if all segments match; otherwise .

### Equals

_method_

```csharp
bool Equals(object? obj)
```

### GetHashCode

_method_

```csharp
int GetHashCode()
```

### GetParent

_method_

```csharp
H5Path? GetParent()
```

Returns the parent path by removing the last segment, or if this path has no segments. The parent , or for a root-level path.

### H5Path

_method_

```csharp
implicit operator H5Path(string path)
```

Implicitly converts a path string to an . The path string to convert.

### ToString

_method_

```csharp
string ToString()
```

