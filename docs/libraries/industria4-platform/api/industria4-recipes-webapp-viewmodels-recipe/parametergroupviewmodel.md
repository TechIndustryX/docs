---
title: "ParameterGroupViewModel"
---

# ParameterGroupViewModel

_public class_

Namespace: `Industria4.Recipes.WebApp.ViewModels.Recipe`

Source: `src/Recipes/Recipes.WebApp/ViewModels/Recipe/ParameterGroupViewModel.cs`

## Summary

Represents parameter group view model.

## Constructors

### ParameterGroupViewModel

_constructor_

```csharp
ParameterGroupViewModel(ParametersGroupsViewModel parent,DomainRecipeModel.ParameterGroup modelParameterGroup)
```

Initializes a new instance of .

## Properties

### Description

_property_

```csharp
string Description
```

Gets description.

### IsActive

_property_

```csharp
bool IsActive
```

Gets or sets is active.

### Key

_property_

```csharp
string Key
```

Gets key.

### ModelId

_property_

```csharp
string ModelId
```

Gets or sets model id.

### Parameters

_property_

```csharp
List<ParameterBaseViewModel> Parameters
```

Gets parameters.

### Parent

_property_

```csharp
ParametersGroupsViewModel Parent
```

Gets parent.

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

### GetCommand

_method_

```csharp
Command.ParameterGroup GetCommand()
```

get command.

### LoadModelAsync

_method_

```csharp
Task LoadModelAsync(string modelId)
```

load model async.

### LoadValuesAsync

_method_

```csharp
Task LoadValuesAsync(IEnumerable<ParameterGroup> parametersGroups)
```

load values async.

