---
title: "ModelViewModel"
---

# ModelViewModel

_public class_

Namespace: `Industria4.Recipes.WebApp.ViewModels.Model`

Source: `src/Recipes/Recipes.WebApp/ViewModels/Model/ModelViewModel.cs`

## Summary

Represents model view model.

## Constructors

### ModelViewModel

_constructor_

```csharp
ModelViewModel(IServiceProvider serviceProvider)
```

Initializes a new instance of .

## Properties

### BaseModel

_property_

```csharp
ModelRead BaseModel
```

Gets or sets base model.

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

### Models

_property_

```csharp
IReadOnlyList<ModelRead> Models
```

Gets or sets models.

### ParametersGroups

_property_

```csharp
List<ParameterGroupViewModel> ParametersGroups
```

Gets parameters groups.

### ParentModels

_property_

```csharp
IReadOnlyList<ModelRead> ParentModels
```

Gets or sets parent models.

### RecipeSupported

_property_

```csharp
bool RecipeSupported
```

Gets or sets recipe supported.

### ServiceProvider

_property_

```csharp
IServiceProvider ServiceProvider
```

Gets service provider.

### Units

_property_

```csharp
IReadOnlyList<UnitRead> Units
```

Gets or sets units.

## Methods

### DeleteAsync

_method_

```csharp
Task DeleteAsync()
```

delete async.

### DeleteGroupAsync

_method_

```csharp
Task DeleteGroupAsync()
```

delete group async.

### Dispose

_method_

```csharp
void Dispose()
```

dispose.

### LoadAsync

_method_

```csharp
Task LoadAsync(string modelId,string groupKey)
```

load async.

### NewGroup

_method_

```csharp
void NewGroup()
```

new group.

### SaveAsync

_method_

```csharp
Task SaveAsync()
```

save async.

