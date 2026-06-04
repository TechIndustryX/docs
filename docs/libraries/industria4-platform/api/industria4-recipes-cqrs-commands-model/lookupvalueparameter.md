---
title: "LookupValueParameter"
---

# LookupValueParameter

_public class_

Namespace: `Industria4.Recipes.Cqrs.Commands.Model`

Source: `src/Recipes/Recipes.Cqrs/Commands/Model/Parameter.cs`

## Summary

A value parameter definition whose allowed values are constrained to a predefined lookup list.

## Constructors

### LookupValueParameter

_constructor_

```csharp
LookupValueParameter(LanguageDictionary<string> descriptions,MetadataDictionary metadata,int sortIndex,int arraySize,DataType type,string unit,string format,IEnumerable<LookupValueItem> values,string readNodeId,string writeNodeId,DataValue defaultValue)
```

Initializes a new instance of .

## Properties

### Values

_property_

```csharp
LookupValueItem[] Values
```

Gets the list of allowed values and their localised labels.

