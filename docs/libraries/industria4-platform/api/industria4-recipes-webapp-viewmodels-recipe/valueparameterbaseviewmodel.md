---
title: "ValueParameterBaseViewModel<T>"
---

# ValueParameterBaseViewModel&lt;T&gt;

_public class_

Namespace: `Industria4.Recipes.WebApp.ViewModels.Recipe`

Source: `src/Recipes/Recipes.WebApp/ViewModels/Recipe/ValueParameterBaseViewModel.cs`

## Summary

Represents value parameter base view model.

## Constructors

### ValueParameterBaseViewModel

_constructor_

```csharp
ValueParameterBaseViewModel(string key,ParameterGroupViewModel parameterGroup,DomainRecipeModel.ValueParameterBase valueParameterBase)
```

## Properties

### Parameter

_property_

```csharp
DomainRecipeModel.ValueParameterBase Parameter
```

### ShowValidation

_property_

```csharp
bool ShowValidation
```

Gets show validation.

### Validation

_property_

```csharp
string Validation
```

Gets validation.

## Methods

### LoadValueAsync

_method_

```csharp
Task LoadValueAsync(ParameterBase parameterBase)
```

load value async.

