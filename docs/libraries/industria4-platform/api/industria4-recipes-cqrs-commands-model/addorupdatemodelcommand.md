---
title: "AddOrUpdateModelCommand"
---

# AddOrUpdateModelCommand

_public class_

Namespace: `Industria4.Recipes.Cqrs.Commands.Model`

Source: `src/Recipes/Recipes.Cqrs/Commands/Model/AddOrUpdateModelCommand.cs`

## Summary

Command to create a new recipe model or update an existing one.

## Properties

### BaseModelId

_property_

```csharp
string BaseModelId
```

Gets the optional identifier of the parent/base model this model derives from.

### Descriptions

_property_

```csharp
LanguageDictionary<string> Descriptions
```

Gets the localised descriptions for this model.

### EntityVersion

_property_

```csharp
byte[] EntityVersion
```

Gets the concurrency token for optimistic concurrency control.

### Metadata

_property_

```csharp
MetadataDictionary Metadata
```

Gets optional additional metadata.

### ParameterGroups

_property_

```csharp
ParameterGroup[] ParameterGroups
```

Gets the parameter groups that define the model structure.

### RecipeSupported

_property_

```csharp
bool RecipeSupported
```

Gets a value indicating whether recipes can be created from this model.

### SortIndex

_property_

```csharp
int SortIndex
```

Gets the display sort order index.

