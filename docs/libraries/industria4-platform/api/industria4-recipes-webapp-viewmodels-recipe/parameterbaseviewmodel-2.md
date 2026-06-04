---
title: "ParameterBaseViewModel<T>"
---

# ParameterBaseViewModel&lt;T&gt;

_public class_

Namespace: `Industria4.Recipes.WebApp.ViewModels.Recipe`

Source: `src/Recipes/Recipes.WebApp/ViewModels/Recipe/ParameterBaseViewModel.cs`

## Summary

Represents parameter base view model.

## Constructors

### ParameterBaseViewModel

_constructor_

```csharp
ParameterBaseViewModel(string key,ParameterGroupViewModel parameterGroup,DomainRecipeModel.ParameterBase modelParameter)
```

## Properties

### CanAddElement

_property_

```csharp
bool CanAddElement
```

Gets can add element.

### Elements

_property_

```csharp
ObservableCollection<T> Elements
```

Gets elements.

### ObjectElements

_property_

```csharp
IList ObjectElements
```

Gets object elements.

## Methods

### AddElementAsync

_method_

```csharp
Task<object> AddElementAsync()
```

add element async.

### CloneElementAsync

_method_

```csharp
Task<object> CloneElementAsync(int index)
```

clone element async.

### CreateElementAsync

_method_

```csharp
Task<T> CreateElementAsync()
```

### LoadModelAsync

_method_

```csharp
Task LoadModelAsync()
```

load model async.

### MoveElementDown

_method_

```csharp
object MoveElementDown(int index)
```

move element down.

### MoveElementUp

_method_

```csharp
object MoveElementUp(int index)
```

move element up.

### RemoveElement

_method_

```csharp
void RemoveElement(int index)
```

remove element.

