---
title: "Recipe"
---

# Recipe

_public class_

Namespace: `Industria4.Recipes.DomainModel.Recipe`

Source: `src/Recipes/Recipes.DomainModel/Recipe/Recipe.cs`

## Summary

Aggregate root representing a recipe that provides parameter values for a specific .

## Constructors

### Recipe

_constructor_

```csharp
Recipe(string id,string modelId)
```

Initializes a new recipe linked to the given model. The unique recipe identifier. The identifier of the model this recipe satisfies.

## Properties

### Descriptions

_property_

```csharp
LanguageDictionary<string> Descriptions
```

Gets the localised descriptions for this recipe, keyed by language.

### Id

_property_

```csharp
string Id
```

### Metadata

_property_

```csharp
MetadataDictionary Metadata
```

Gets the arbitrary metadata for this recipe (lazily initialised).

### ModelId

_property_

```csharp
string ModelId
```

Gets the identifier of the model this recipe is based on.

### ParametersGroups

_property_

```csharp
ValidableList<ParameterGroup> ParametersGroups
```

Gets the ordered list of parameter groups with their values.

### RemoteRecipes

_property_

```csharp
Dictionary<Uri,string> RemoteRecipes
```

Gets the map of remote recipe URIs to their remote server addresses.

## Methods

### Equals

_method_

```csharp
bool Equals(object obj)
```

### Equals

_method_

```csharp
bool Equals(Recipe other)
```

### GetHashCode

_method_

```csharp
int GetHashCode()
```

