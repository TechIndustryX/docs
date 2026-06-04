---
title: "CompositionItem"
---

# CompositionItem

_public class_

Namespace: `Industria4.Production.DomainModel.Composition`

Source: `src/Production/Production.DomainModel/Composition/CompositionItem.cs`

## Summary

An item within a that pairs a production model with a recipe.

## Constructors

### CompositionItem

_constructor_

```csharp
CompositionItem(string key,string modelId,string recipeId)
```

Initializes a new composition item. The short unique key identifying this item within the composition. The identifier of the production model. The identifier of the recipe to apply.

## Properties

### Descriptions

_property_

```csharp
LanguageDictionary<string> Descriptions
```

Gets the localised descriptions for this item, keyed by language.

### Key

_property_

```csharp
string Key
```

Gets the short key uniquely identifying this item within the composition.

### Metadata

_property_

```csharp
MetadataDictionary Metadata
```

Gets the arbitrary metadata for this item (lazily initialised).

### ModelId

_property_

```csharp
string ModelId
```

Gets the identifier of the associated production model.

### RecipeId

_property_

```csharp
string RecipeId
```

Gets the identifier of the associated recipe.

