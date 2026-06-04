---
title: "ParameterBaseViewModel"
---

# ParameterBaseViewModel

_public class_

Namespace: `Industria4.Recipes.WebApp.ViewModels.Model`

Source: `src/Recipes/Recipes.WebApp/ViewModels/Model/ParameterBaseViewModel.cs`

## Summary

Represents parameter base view model.

## Constructors

### ParameterBaseViewModel

_constructor_

```csharp
ParameterBaseViewModel(ParameterGroupViewModel parameterGroupViewModel,string key,DomainRecipeModel.ParameterBase modelParameter)
```

## Properties

### ArraySize

_property_

```csharp
int ArraySize
```

Gets or sets array size.

### Description

_property_

```csharp
LanguageDictionary<string> Description
```

Gets or sets description.

### ParameterGroupViewModel

_property_

```csharp
ParameterGroupViewModel ParameterGroupViewModel
```

Gets parameter group view model.

### SortIndex

_property_

```csharp
int SortIndex
```

Gets or sets sort index.

## Methods

### GetCommand

_method_

```csharp
ParameterBase GetCommand()
```

get command.

### Load

_method_

```csharp
void Load()
```

load.

