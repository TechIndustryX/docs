---
title: "ParameterBaseViewModel"
---

# ParameterBaseViewModel

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

### ArraySize

_property_

```csharp
int ArraySize
```

Gets array size.

### CanAddElement

_property_

```csharp
bool CanAddElement
```

Gets can add element.

### Description

_property_

```csharp
string Description
```

Gets description.

### IsArray

_property_

```csharp
bool IsArray
```

Gets is array.

### Key

_property_

```csharp
string Key
```

Gets key.

### ObjectElements

_property_

```csharp
IList ObjectElements
```

Gets object elements.

### ParameterGroup

_property_

```csharp
ParameterGroupViewModel ParameterGroup
```

Gets parameter group.

### Tracker

_property_

```csharp
ObservableTracker Tracker
```

### Unit

_property_

```csharp
string Unit
```

Gets unit.

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

### CopyFrom

_method_

```csharp
void CopyFrom(ParameterBaseViewModel viewModel)
```

copy from.

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

### GetCommand

_method_

```csharp
ParameterBase GetCommand()
```

get command.

### LoadModelAsync

_method_

```csharp
Task LoadModelAsync()
```

load model async.

### LoadValueAsync

_method_

```csharp
Task LoadValueAsync(Recipes.DomainModel.Recipe.ParameterBase parameterBase)
```

load value async.

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

### SetCurrentElement

_method_

```csharp
void SetCurrentElement(object element,bool toggle)
```

set current element.

