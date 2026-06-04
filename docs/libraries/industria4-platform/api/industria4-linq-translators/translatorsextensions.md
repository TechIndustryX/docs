---
title: "TranslatorsExtensions"
---

# TranslatorsExtensions

_public class_

Namespace: `Industria4.Linq.Translators`

Source: `src/Shared/Linq.EntityFramework/TranslatorsExtensions.cs`

## Summary

Extensions to

## Methods

### AddContainsToLike

_method_

```csharp
DefaultExpressionTranslatorProvider<T> AddContainsToLike<T>(this DefaultExpressionTranslatorProvider<T> provider)
```

Convert Contains calls to like

### AddJsonDictionary

_method_

```csharp
DefaultExpressionTranslatorProvider<T> AddJsonDictionary<T>(this DefaultExpressionTranslatorProvider<T> provider,MethodInfo jsonValueMethod,Expression<Func<T,IDictionary<string,object>>> fromMember,Expression<Func<T,string>> toMember)
```

Adds support for filtering properties of type Dictionary but serialized as json

### AddJsonDictionary

_method_

```csharp
DefaultExpressionTranslatorProvider<T> AddJsonDictionary<T>(this DefaultExpressionTranslatorProvider<T> provider,MethodInfo jsonValueMethod)
```

Adds support for filtering properties of type Dictionary but serialized as json

### AddLanguageDictionary

_method_

```csharp
DefaultExpressionTranslatorProvider<T> AddLanguageDictionary<T>(this DefaultExpressionTranslatorProvider<T> provider,MethodInfo jsonValueMethod)
```

Adds support to LanguageFunctions in order to enrich query before its evaluation

