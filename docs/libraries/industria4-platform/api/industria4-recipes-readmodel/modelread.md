---
title: "ModelRead"
---

# ModelRead

_public class_

Namespace: `Industria4.Recipes.ReadModel`

Source: `src/Recipes/Recipes.ReadModel/ModelRead.cs`

## Summary

Read model representing a recipe model as returned by the Recipes query stack.

## Properties

### BaseDescription

_property_

```csharp
string BaseDescription
```

Gets or sets the default-language description of the base model.

### BaseModelId

_property_

```csharp
string BaseModelId
```

Gets or sets the identifier of the parent/base model.

### Description

_property_

```csharp
string Description
```

Gets or sets the default-language description of this model.

### Id

_property_

```csharp
string Id
```

Gets or sets the unique model identifier.

### IsDeleted

_property_

```csharp
bool IsDeleted
```

Gets or sets a value indicating whether this model has been soft-deleted.

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

### RecipeSupported

_property_

```csharp
bool RecipeSupported
```

Gets or sets a value indicating whether recipes can be created from this model.

### SortIndex

_property_

```csharp
int SortIndex
```

Gets or sets the display sort order index.

