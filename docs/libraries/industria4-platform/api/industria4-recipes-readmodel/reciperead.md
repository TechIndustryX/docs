---
title: "RecipeRead"
---

# RecipeRead

_public class_

Namespace: `Industria4.Recipes.ReadModel`

Source: `src/Recipes/Recipes.ReadModel/RecipeRead.cs`

## Summary

Read model representing a recipe as returned by the Recipes query stack.

## Properties

### Description

_property_

```csharp
string Description
```

Gets or sets the default-language description of this recipe.

### Id

_property_

```csharp
string Id
```

Gets or sets the unique recipe identifier.

### IsDeleted

_property_

```csharp
bool IsDeleted
```

Gets or sets a value indicating whether this recipe has been soft-deleted.

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

### ModelDescription

_property_

```csharp
string ModelDescription
```

Gets or sets the default-language description of the associated model.

### ModelId

_property_

```csharp
string ModelId
```

Gets or sets the identifier of the model this recipe is based on.

### Version

_property_

```csharp
string Version
```

Gets or sets the recipe version string.

