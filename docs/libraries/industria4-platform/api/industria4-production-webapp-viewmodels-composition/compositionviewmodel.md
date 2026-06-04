---
title: "CompositionViewModel"
---

# CompositionViewModel

_public class_

Namespace: `Industria4.Production.WebApp.ViewModels.Composition`

Source: `src/Production/Production.WebApp/ViewModels/Composition/CompositionViewModel.cs`

## Summary

View-model for the composition create/edit page, encapsulating load, save, and delete operations.

## Constructors

### CompositionViewModel

_constructor_

```csharp
CompositionViewModel(IServiceProvider serviceProvider)
```

Initialises a new instance of . The application service provider used to resolve dependencies.

## Properties

### CompositionId

_property_

```csharp
string CompositionId
```

Gets the identifier of the composition currently being edited, or for a new composition.

### IsNew

_property_

```csharp
bool IsNew
```

Gets or sets a value indicating whether this is a new (unsaved) composition.

### Items

_property_

```csharp
ObservableCollectionEx<CompositionItemViewModel> Items
```

Gets the collection of composition item view-models belonging to this composition.

### LanguageContext

_property_

```csharp
ILanguageContext LanguageContext
```

Gets the active language context used for localisation.

### Models

_property_

```csharp
ModelRead[] Models
```

Gets the available product models that can be selected for items.

### SelectRecipeAsync

_property_

```csharp
Func<string,Task<RecipeRead?>>? SelectRecipeAsync
```

Gets or sets the callback used to prompt the user to pick a recipe for a given model identifier.

### ServiceProvider

_property_

```csharp
IServiceProvider ServiceProvider
```

Gets the application service provider.

## Methods

### AddItem

_method_

```csharp
void AddItem()
```

Adds a new empty item view-model to the composition items collection.

### DeleteAsync

_method_

```csharp
Task DeleteAsync()
```

Prompts the user to confirm deletion, then deletes the composition and navigates back to the list. A representing the asynchronous operation.

### DeleteItem

_method_

```csharp
void DeleteItem(CompositionItemViewModel item)
```

Removes the specified item from the composition items collection. The item view-model to remove.

### Dispose

_method_

```csharp
void Dispose()
```

Releases menu-scope resources.

### LoadAsync

_method_

```csharp
Task LoadAsync(string compositionId)
```

Loads composition data and available models/recipes for the given composition identifier. The composition identifier to load, or / empty for a new composition. A representing the asynchronous load operation.

### SaveAsync

_method_

```csharp
Task SaveAsync()
```

Persists the composition (create or update) and shows a confirmation toast. A representing the asynchronous save operation.

