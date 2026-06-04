---
title: "CompositionRead"
---

# CompositionRead

_public class_

Namespace: `Industria4.Production.ReadModel`

Source: `src/Production/Production.ReadModel/CompositionRead.cs`

## Summary

Read model representing a composition as returned by the Production query stack.

## Properties

### Description

_property_

```csharp
string Description
```

Gets or sets the default-language description of this composition.

### Id

_property_

```csharp
string Id
```

Gets or sets the unique composition identifier.

### IsDeleted

_property_

```csharp
bool IsDeleted
```

Gets or sets a value indicating whether this composition has been soft-deleted.

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

