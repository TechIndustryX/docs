---
title: "ParameterBase"
---

# ParameterBase

_public class_

Namespace: `Industria4.Recipes.Cqrs.Commands.Model`

Source: `src/Recipes/Recipes.Cqrs/Commands/Model/Parameter.cs`

## Summary

Abstract base for all model parameter definition command DTOs.

## Properties

### ArraySize

_property_

```csharp
int ArraySize
```

Gets the array dimension (0 for a scalar parameter).

### Descriptions

_property_

```csharp
LanguageDictionary<string> Descriptions
```

Gets the localised descriptions for this parameter.

### Metadata

_property_

```csharp
MetadataDictionary Metadata
```

Gets optional additional metadata.

### SortIndex

_property_

```csharp
int SortIndex
```

Gets the display sort order index.

