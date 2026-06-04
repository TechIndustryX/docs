---
title: "ParametersGroupsViewModel"
---

# ParametersGroupsViewModel

_public class_

Namespace: `Industria4.Recipes.WebApp.ViewModels.Recipe`

Source: `src/Recipes/Recipes.WebApp/ViewModels/Recipe/ParametersGroupsViewModel.cs`

## Summary

Represents parameters groups view model.

## Constructors

### ParametersGroupsViewModel

_constructor_

```csharp
ParametersGroupsViewModel(IServiceProvider serviceProvider,ParameterBaseViewModel parent)
```

Initializes a new instance of .

### ParametersGroupsViewModel

_constructor_

```csharp
ParametersGroupsViewModel(IServiceProvider serviceProvider)
```

Initializes a new instance of .

## Properties

### HasChanges

_property_

```csharp
bool HasChanges
```

Gets has changes.

### LanguageContext

_property_

```csharp
ILanguageContext LanguageContext
```

Gets language context.

### ModelId

_property_

```csharp
string ModelId
```

Gets or sets model id.

### ParametersGroups

_property_

```csharp
List<ParameterGroupViewModel> ParametersGroups
```

Gets parameters groups.

### Parent

_property_

```csharp
ParameterBaseViewModel Parent
```

Gets parent.

### ServiceProvider

_property_

```csharp
IServiceProvider ServiceProvider
```

Gets service provider.

## Methods

### Dispose

_method_

```csharp
void Dispose()
```

dispose.

### Dispose

_method_

```csharp
void Dispose(bool disposing)
```

### LoadModelAsync

_method_

```csharp
Task LoadModelAsync(string modelId)
```

load model async.

### ResetChanges

_method_

```csharp
void ResetChanges()
```

reset changes.

