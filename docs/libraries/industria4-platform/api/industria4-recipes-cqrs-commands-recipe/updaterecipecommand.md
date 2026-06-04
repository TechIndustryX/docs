---
title: "UpdateRecipeCommand"
---

# UpdateRecipeCommand

_public class_

Namespace: `Industria4.Recipes.Cqrs.Commands.Recipe`

Source: `src/Recipes/Recipes.Cqrs/Commands/Recipe/UpdateRecipeCommand.cs`

## Summary

Command to update an existing recipe's descriptions, parameters, remote links, and metadata.

## Properties

### Descriptions

_property_

```csharp
LanguageDictionary<string> Descriptions
```

Gets the localised descriptions.

### Metadata

_property_

```csharp
MetadataDictionary Metadata
```

Gets optional additional metadata.

### ParametersGroups

_property_

```csharp
ParameterGroup[] ParametersGroups
```

Gets the updated parameter-value groups.

### RemoteRecipes

_property_

```csharp
Dictionary<Uri,string> RemoteRecipes
```

Gets the updated map of remote service URIs to remote recipe identifiers.

