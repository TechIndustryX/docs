---
title: "LookupValueParameterViewModel"
---

# LookupValueParameterViewModel

_public class_

Namespace: `Industria4.Recipes.WebApp.ViewModels.Recipe`

Source: `src/Recipes/Recipes.WebApp/ViewModels/Recipe/LookupValueParameterViewModel.cs`

## Summary

Represents lookup value parameter view model.

## Constructors

### LookupValueParameterViewModel

_constructor_

```csharp
LookupValueParameterViewModel(string key,ParameterGroupViewModel parameterGroup,DomainRecipeModel.LookupValueParameter parameter)
```

Initializes a new instance of .

## Properties

### Values

_property_

```csharp
IReadOnlyList<LookupValueItemViewModel> Values
```

Gets values.

## Methods

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

### CreateElementAsync

_method_

```csharp
Task<LookupValueItemValueViewModel> CreateElementAsync()
```

### GetCommand

_method_

```csharp
Command.ParameterBase GetCommand()
```

get command.

### LoadValueAsync

_method_

```csharp
Task LoadValueAsync(ParameterBase parameterBase)
```

load value async.

