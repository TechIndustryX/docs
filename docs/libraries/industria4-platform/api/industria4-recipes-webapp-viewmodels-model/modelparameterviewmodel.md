---
title: "ModelParameterViewModel"
---

# ModelParameterViewModel

_public class_

Namespace: `Industria4.Recipes.WebApp.ViewModels.Model`

Source: `src/Recipes/Recipes.WebApp/ViewModels/Model/ModelParameterViewModel.cs`

## Summary

Represents model parameter view model.

## Constructors

### ModelParameterViewModel

_constructor_

```csharp
ModelParameterViewModel(ParameterGroupViewModel parameterGroupViewModel,string key,DomainRecipeModel.ModelParameter modelParameter)
```

Initializes a new instance of .

### ModelParameterViewModel

_constructor_

```csharp
ModelParameterViewModel(ParameterGroupViewModel parameterGroupViewModel)
```

Initializes a new instance of .

## Properties

### Model

_property_

```csharp
ModelRead Model
```

Gets or sets model.

### Models

_property_

```csharp
IReadOnlyList<ModelRead> Models
```

Gets models.

## Methods

### GetCommand

_method_

```csharp
Recipes.Cqrs.Commands.Model.ParameterBase GetCommand()
```

get command.

### Load

_method_

```csharp
void Load()
```

load.

