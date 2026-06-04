---
title: "ParameterBase"
---

# ParameterBase

_public class_

Namespace: `Industria4.Recipes.DomainModel.Model`

Source: `src/Recipes/Recipes.DomainModel/Model/ParameterBase.cs`

## Summary

Base class for all recipe/model parameters, providing common localisation, metadata, and array-size features.

## Properties

### Descriptions

_property_

```csharp
LanguageDictionary<string> Descriptions
```

Gets the localised descriptions for this parameter, keyed by language.

### IsArray

_property_

```csharp
bool IsArray
```

Gets a value indicating whether this parameter is an array (i.e. &amp;gt; 0).

### Metadata

_property_

```csharp
MetadataDictionary Metadata
```

Gets the arbitrary metadata for this parameter (lazily initialised).

