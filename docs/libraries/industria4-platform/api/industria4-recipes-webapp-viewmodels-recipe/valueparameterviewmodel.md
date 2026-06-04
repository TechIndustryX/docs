---
title: "ValueParameterViewModel"
---

# ValueParameterViewModel

_public class_

Namespace: `Industria4.Recipes.WebApp.ViewModels.Recipe`

Source: `src/Recipes/Recipes.WebApp/ViewModels/Recipe/ValueParameterViewModel.cs`

## Summary

Represents value parameter view model.

## Constructors

### ValueParameterViewModel

_constructor_

```csharp
ValueParameterViewModel(string key,ParameterGroupViewModel parameterGroup,DomainRecipeModel.ValueParameter modelParameter)
```

Initializes a new instance of .

## Properties

### ShowValidation

_property_

```csharp
bool ShowValidation
```

Gets show validation.

### ValueParameter

_property_

```csharp
DomainRecipeModel.ValueParameter ValueParameter
```

Gets value parameter.

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
Task<ValueViewModel> CreateElementAsync()
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

