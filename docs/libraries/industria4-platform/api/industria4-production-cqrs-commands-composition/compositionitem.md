---
title: "CompositionItem"
---

# CompositionItem

_public class_

Namespace: `Industria4.Production.Cqrs.Commands.Composition`

Source: `src/Production/Production.Cqrs/Commands/Composition/CompositionItem.cs`

## Summary

Represents a single model+recipe pair in a .

## Properties

### Descriptions

_property_

```csharp
LanguageDictionary<string> Descriptions
```

Gets the localised descriptions for this item.

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

Gets the metadata for this item.

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

