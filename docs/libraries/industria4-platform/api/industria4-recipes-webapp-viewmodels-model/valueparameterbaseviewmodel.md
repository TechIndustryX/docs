---
title: "ValueParameterBaseViewModel"
---

# ValueParameterBaseViewModel

_public class_

Namespace: `Industria4.Recipes.WebApp.ViewModels.Model`

Source: `src/Recipes/Recipes.WebApp/ViewModels/Model/ValueParameterBaseViewModel.cs`

## Summary

Represents value parameter base view model.

## Constructors

### ValueParameterBaseViewModel

_constructor_

```csharp
ValueParameterBaseViewModel(ParameterGroupViewModel parameterGroupViewModel,string key,DomainRecipeModel.ValueParameterBase valueParameterBase)
```

## Properties

### DefaultValue

_property_

```csharp
object DefaultValue
```

Gets or sets default value.

### ObjectTypes

_property_

```csharp
object[] ObjectTypes
```

Gets object types.

### Types

_property_

```csharp
DataType[] Types
```

Gets types.

### Units

_property_

```csharp
IReadOnlyList<string> Units
```

Gets units.

### WriteNodeId

_property_

```csharp
string WriteNodeId
```

Gets or sets write node id.

## Methods

### ConvertValue

_method_

```csharp
object ConvertValue(DataType type,object value,object defaultValue)
```

### Load

_method_

```csharp
void Load()
```

load.

