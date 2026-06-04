---
title: "AddRecipeCommand"
---

# AddRecipeCommand

_public class_

Namespace: `Industria4.Recipes.Cqrs.Commands.Recipe`

Source: `src/Recipes/Recipes.Cqrs/Commands/Recipe/AddRecipeCommand.cs`

## Summary

Command to create a new recipe.

## Properties

### Descriptions

_property_

```csharp
LanguageDictionary<string> Descriptions
```

Gets the localised descriptions for this recipe.

### Metadata

_property_

```csharp
MetadataDictionary Metadata
```

Gets optional additional metadata.

### ModelId

_property_

```csharp
string ModelId
```

Gets the identifier of the model this recipe is based on.

### ParametersGroups

_property_

```csharp
ParameterGroup[] ParametersGroups
```

Gets the parameter-value groups for this recipe.

### RemoteRecipes

_property_

```csharp
Dictionary<Uri,string> RemoteRecipes
```

Gets the map of remote service URIs to the remote recipe identifiers used for distributed recipe execution.

