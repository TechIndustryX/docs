---
title: "CloneRecipeCommand"
---

# CloneRecipeCommand

_public class_

Namespace: `Industria4.Recipes.Cqrs.Commands.Recipe`

Source: `src/Recipes/Recipes.Cqrs/Commands/Recipe/CloneRecipeCommand.cs`

## Summary

Command to clone an existing recipe into a new recipe with the given descriptions.

## Properties

### Descriptions

_property_

```csharp
LanguageDictionary<string> Descriptions
```

Gets the localised descriptions for the new cloned recipe.

### SourceId

_property_

```csharp
string SourceId
```

Gets the identifier of the recipe to clone.

