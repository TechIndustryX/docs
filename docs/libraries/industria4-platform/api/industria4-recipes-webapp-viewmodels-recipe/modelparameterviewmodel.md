---
title: "ModelParameterViewModel"
---

# ModelParameterViewModel

_public class_

Namespace: `Industria4.Recipes.WebApp.ViewModels.Recipe`

Source: `src/Recipes/Recipes.WebApp/ViewModels/Recipe/ModelParameterViewModel.cs`

## Summary

Represents model parameter view model.

## Constructors

### ModelParameterViewModel

_constructor_

```csharp
ModelParameterViewModel(string key,ParameterGroupViewModel parameterGroup,DomainRecipeModel.ModelParameter modelParameter)
```

Initializes a new instance of .

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
Task<ParametersGroupsViewModel> CreateElementAsync()
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

