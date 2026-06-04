---
title: "ModelLinkParameter"
---

# ModelLinkParameter

_public class_

Namespace: `Industria4.Recipes.Cqrs.Commands.Model`

Source: `src/Recipes/Recipes.Cqrs/Commands/Model/Parameter.cs`

## Summary

A model parameter definition that links to an existing recipe (model-link pattern).

## Constructors

### ModelLinkParameter

_constructor_

```csharp
ModelLinkParameter(LanguageDictionary<string> descriptions,MetadataDictionary metadata,int sortIndex,int arraySize,string modelId,string defaultRecipeId)
```

Initializes a new model-link parameter definition.

## Properties

### DefaultRecipeId

_property_

```csharp
string DefaultRecipeId
```

Gets the identifier of the default linked recipe.

