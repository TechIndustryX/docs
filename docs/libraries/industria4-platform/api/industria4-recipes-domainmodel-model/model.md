---
title: "Model"
---

# Model

_public class_

Namespace: `Industria4.Recipes.DomainModel.Model`

Source: `src/Recipes/Recipes.DomainModel/Model/Model.cs`

## Summary

Aggregate root describing the parameter structure (groups and parameters) that a recipe must adhere to.

## Constructors

### Model

_constructor_

```csharp
Model(string id)
```

Initializes a new model with the given identifier. The unique identifier (max 36 chars).

## Properties

### Descriptions

_property_

```csharp
LanguageDictionary<string> Descriptions
```

Gets the localised descriptions for this model, keyed by language.

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

Gets the arbitrary metadata for this model (lazily initialised).

### ParametersGroups

_property_

```csharp
ValidableList<ParameterGroup> ParametersGroups
```

Gets the ordered list of parameter groups defined by this model.

### RecipeSupported

_property_

```csharp
bool RecipeSupported
```

Gets or sets a value indicating whether this model supports recipes.

## Methods

### Equals

_method_

```csharp
bool Equals(Model other)
```

### Equals

_method_

```csharp
bool Equals(object obj)
```

### GetHashCode

_method_

```csharp
int GetHashCode()
```

