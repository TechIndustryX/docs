---
title: "ModelParameter"
---

# ModelParameter

_public class_

Namespace: `Industria4.Recipes.Cqrs.Commands.Model`

Source: `src/Recipes/Recipes.Cqrs/Commands/Model/Parameter.cs`

## Summary

A model parameter definition that references another nested model.

## Constructors

### ModelParameter

_constructor_

```csharp
ModelParameter(LanguageDictionary<string> descriptions,MetadataDictionary metadata,int sortIndex,int arraySize,string modelId)
```

Initializes a new model-parameter definition referencing the specified model.

## Properties

### ModelId

_property_

```csharp
string ModelId
```

Gets the identifier of the nested model.

