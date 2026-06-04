---
title: "TranslatorExtensions"
---

# TranslatorExtensions

_public class_

Namespace: `Industria4.Linq`

Source: `src/Shared/Linq/Translators/TranslatorExtensions.cs`

## Summary

Extension methods for attaching expression translators to sources.

## Methods

### AddTranslators

_method_

```csharp
IQueryable<T> AddTranslators<T>(this IQueryable<T> source,Action<DefaultExpressionTranslatorProvider<T>> providers)
```

Add a provider that can transform part of an expression before it is evaluated Action for configuring multiple translators

### AddTranslators

_method_

```csharp
IQueryable<T> AddTranslators<T>(this IQueryable<T> source,IExpressionTranslatorProvider expressionTranslatorProvider)
```

Add a provider that can transform part of an expression before it is evaluated

### CastQueryable

_method_

```csharp
IQueryable<T> CastQueryable<T>(this IQueryable<T> source)
```

Allows casting query expressions to a base type and, during evaluation, replaces base-type references with the original type.

