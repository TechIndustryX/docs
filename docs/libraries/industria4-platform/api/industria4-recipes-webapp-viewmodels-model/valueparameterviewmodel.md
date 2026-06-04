---
title: "ValueParameterViewModel"
---

# ValueParameterViewModel

_public class_

Namespace: `Industria4.Recipes.WebApp.ViewModels.Model`

Source: `src/Recipes/Recipes.WebApp/ViewModels/Model/ValueParameterViewModel.cs`

## Summary

Represents value parameter view model.

## Constructors

### ValueParameterViewModel

_constructor_

```csharp
ValueParameterViewModel(ParameterGroupViewModel parameterGroupViewModel,string key,DomainRecipeModel.ValueParameter valueParameter)
```

Initializes a new instance of .

### ValueParameterViewModel

_constructor_

```csharp
ValueParameterViewModel(ParameterGroupViewModel parameterGroupViewModel)
```

Initializes a new instance of .

## Properties

### CanSetMaximum

_property_

```csharp
bool CanSetMaximum
```

Gets or sets can set maximum.

### CanSetMinimum

_property_

```csharp
bool CanSetMinimum
```

Gets or sets can set minimum.

## Methods

### GetCommand

_method_

```csharp
Command.ParameterBase GetCommand()
```

get command.

### Load

_method_

```csharp
void Load()
```

load.

