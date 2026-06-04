---
title: "DefaultExpressionTranslatorProvider"
---

# DefaultExpressionTranslatorProvider

_public class_

Namespace: `Industria4.Linq.Translators`

Source: `src/Shared/Linq/Translators/DefaultExpressionTranslatorProvider.cs`

## Summary

A default backed by a mutable list of translators.

## Properties

### Translators

_property_

```csharp
List<IExpressionTranslator> Translators
```

Gets the list of registered expression translators.

## Methods

### GetExpressionTranslators

_method_

```csharp
IEnumerable<IExpressionTranslator> GetExpressionTranslators()
```

