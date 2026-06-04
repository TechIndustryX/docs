---
title: "RecipeRemoteItemViewModel"
---

# RecipeRemoteItemViewModel

_public record_

Namespace: `Industria4.Recipes.WebApp.ViewModels.Recipe`

Source: `src/Recipes/Recipes.WebApp/ViewModels/Recipe/RecipeRemotesViewModel.cs`

## Summary

Immutable data record representing recipe remote item view model.

## Constructors

### RecipeRemoteItemViewModel

_constructor_

```csharp
RecipeRemoteItemViewModel(Uri uri,string name)
```

Initializes a new instance of .

## Properties

### Name

_property_

```csharp
string Name
```

Gets name.

### RecipeDescription

_property_

```csharp
string RecipeDescription
```

Gets or sets recipe description.

### RecipeId

_property_

```csharp
string RecipeId
```

Gets or sets recipe id.

### Uri

_property_

```csharp
Uri Uri
```

Gets uri.

## Methods

### Deconstruct

_method_

```csharp
void Deconstruct(out Uri Uri,out string Name)
```

deconstruct.

### Reset

_method_

```csharp
void Reset()
```

reset.

### SetRecipe

_method_

```csharp
void SetRecipe(RecipeRead recipe)
```

set recipe.

