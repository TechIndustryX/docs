---
title: "RecipeViewModel"
---

# RecipeViewModel

_public class_

Namespace: `Industria4.Recipes.WebApp.ViewModels.Recipe`

Source: `src/Recipes/Recipes.WebApp/ViewModels/Recipe/RecipeViewModel.cs`

## Summary

Represents recipe view model.

## Constructors

### RecipeViewModel

_constructor_

```csharp
RecipeViewModel(IServiceProvider serviceProvider)
```

Initializes a new instance of .

## Properties

### Description

_property_

```csharp
LanguageDictionary<string> Description
```

Gets or sets description.

### IsNew

_property_

```csharp
bool IsNew
```

Gets or sets is new.

### RecipeId

_property_

```csharp
string RecipeId
```

Gets or sets recipe id.

### Remotes

_property_

```csharp
RecipeRemotesViewModel Remotes
```

Gets remotes.

## Methods

### CloneAsync

_method_

```csharp
Task CloneAsync(string description)
```

clone async.

### DeleteAsync

_method_

```csharp
Task DeleteAsync()
```

delete async.

### Dispose

_method_

```csharp
void Dispose(bool disposing)
```

### DownloadAsync

_method_

```csharp
Task DownloadAsync()
```

download async.

### LoadAsync

_method_

```csharp
Task LoadAsync(string modelId,string recipeId,string groupKey)
```

load async.

### LoadModelAsync

_method_

```csharp
Task LoadModelAsync(string modelId)
```

load model async.

### SaveAsync

_method_

```csharp
Task<bool> SaveAsync()
```

save async.

### ShowValidationErrorsAsync

_method_

```csharp
Task ShowValidationErrorsAsync(IEnumerable<string> messages)
```

show validation errors async.

