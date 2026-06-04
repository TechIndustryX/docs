---
title: "RecipeRemotesViewModel"
---

# RecipeRemotesViewModel

_public class_

Namespace: `Industria4.Recipes.WebApp.ViewModels.Recipe`

Source: `src/Recipes/Recipes.WebApp/ViewModels/Recipe/RecipeRemotesViewModel.cs`

## Summary

Represents recipe remotes view model.

## Constructors

### RecipeRemotesViewModel

_constructor_

```csharp
RecipeRemotesViewModel(IServiceProvider serviceProvider)
```

Initializes a new instance of .

## Properties

### AvailableRemotes

_property_

```csharp
List<RecipeRemoteItemViewModel> AvailableRemotes
```

Gets available remotes.

### Data

_property_

```csharp
Dictionary<Uri,string> Data
```

dictionary.

### Remotes

_property_

```csharp
List<RecipeRemoteItemViewModel> Remotes
```

Gets remotes.

## Methods

### Add

_method_

```csharp
void Add(RecipeRemoteItemViewModel item)
```

add.

### ChangeRecipe

_method_

```csharp
void ChangeRecipe(RecipeRemoteItemViewModel item,RecipeRead recipe)
```

change recipe.

### LoadAsync

_method_

```csharp
Task LoadAsync(IDictionary<Uri,string> remoteRecipes)
```

load async.

### Remove

_method_

```csharp
void Remove(RecipeRemoteItemViewModel item)
```

remove.

