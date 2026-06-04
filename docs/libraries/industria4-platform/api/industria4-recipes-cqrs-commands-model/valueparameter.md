---
title: "ValueParameter"
---

# ValueParameter

_public class_

Namespace: `Industria4.Recipes.Cqrs.Commands.Model`

Source: `src/Recipes/Recipes.Cqrs/Commands/Model/Parameter.cs`

## Summary

A numeric value parameter definition with optional minimum and maximum bounds.

## Constructors

### ValueParameter

_constructor_

```csharp
ValueParameter(LanguageDictionary<string> descriptions,MetadataDictionary metadata,int sortIndex,int arraySize,DataType type,string unit,string format,DataValue minimum,DataValue maximum,string readNodeId,string writeNodeId,DataValue defaultValue)
```

Initializes a new instance of .

## Properties

### Maximum

_property_

```csharp
DataValue Maximum
```

Gets the maximum allowed value, or if unconstrained.

### Minimum

_property_

```csharp
DataValue Minimum
```

Gets the minimum allowed value, or if unconstrained.

