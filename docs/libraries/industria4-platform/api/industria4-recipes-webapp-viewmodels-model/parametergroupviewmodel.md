---
title: "ParameterGroupViewModel"
---

# ParameterGroupViewModel

_public class_

Namespace: `Industria4.Recipes.WebApp.ViewModels.Model`

Source: `src/Recipes/Recipes.WebApp/ViewModels/Model/ParameterGroupViewModel.cs`

## Summary

Represents parameter group view model.

## Constructors

### ParameterGroupViewModel

_constructor_

```csharp
ParameterGroupViewModel(ModelViewModel modelViewModel,DomainRecipeModel.ParameterGroup modelParameterGroup)
```

Initializes a new instance of .

## Properties

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

### Model

_property_

```csharp
ModelViewModel Model
```

Gets model.

### Parameters

_property_

```csharp
ObservableCollectionEx<ParameterBaseViewModel> Parameters
```

Gets parameters.

### SortIndex

_property_

```csharp
int SortIndex
```

Gets or sets sort index.

## Methods

### AddLookupValueParameter

_method_

```csharp
void AddLookupValueParameter()
```

add lookup value parameter.

### AddModelParameter

_method_

```csharp
void AddModelParameter()
```

add model parameter.

### AddValueParameter

_method_

```csharp
void AddValueParameter()
```

add value parameter.

### DeleteParameter

_method_

```csharp
void DeleteParameter(ParameterBaseViewModel parameter)
```

delete parameter.

### GetCommand

_method_

```csharp
Command.ParameterGroup GetCommand()
```

get command.

### Load

_method_

```csharp
void Load()
```

load.

### Remove

_method_

```csharp
void Remove()
```

remove.

### ReorderParameters

_method_

```csharp
void ReorderParameters()
```

reorder parameters.

