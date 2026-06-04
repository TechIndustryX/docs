---
title: "LookupValueParameterViewModel"
---

# LookupValueParameterViewModel

_public class_

Namespace: `Industria4.Recipes.WebApp.ViewModels.Model`

Source: `src/Recipes/Recipes.WebApp/ViewModels/Model/LookupValueParameterViewModel.cs`

## Summary

Represents lookup value parameter view model.

## Constructors

### LookupValueParameterViewModel

_constructor_

```csharp
LookupValueParameterViewModel(ParameterGroupViewModel parameterGroupViewModel,string key,DomainRecipeModel.LookupValueParameter valueParameter)
```

Initializes a new instance of .

### LookupValueParameterViewModel

_constructor_

```csharp
LookupValueParameterViewModel(ParameterGroupViewModel parameterGroupViewModel)
```

Initializes a new instance of .

## Properties

### Values

_property_

```csharp
ObservableCollection<LookupValueItemViewModel> Values
```

Gets values.

## Methods

### AddValue

_method_

```csharp
LookupValueItemViewModel AddValue()
```

add value.

### CheckValues

_method_

```csharp
void CheckValues()
```

check values.

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

### RemoveValue

_method_

```csharp
void RemoveValue(int index)
```

remove value.

