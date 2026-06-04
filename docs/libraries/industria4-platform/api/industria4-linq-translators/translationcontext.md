---
title: "TranslationContext"
---

# TranslationContext

_public class_

Namespace: `Industria4.Linq.Translators`

Source: `src/Shared/Linq/Translators/TranslationContext.cs`

## Summary

Carries the state for a single expression translation step, including the root expression, the current sub-expression being translated, and a callback to recursively apply translators.

## Constructors

### TranslationContext

_constructor_

```csharp
TranslationContext(Expression rootExpression,Expression expression,IExpressionTranslatorProvider provider,Func<Expression,Expression> applyFunc)
```

## Properties

### Expression

_property_

```csharp
Expression Expression
```

Gets or sets the current expression being translated; translators set this to the rewritten result.

### Provider

_property_

```csharp
IExpressionTranslatorProvider Provider
```

Gets the provider that owns the registered translators.

### RootExpression

_property_

```csharp
Expression RootExpression
```

Gets the root expression of the translation tree.

## Methods

### Apply

_method_

```csharp
Expression Apply<T>(T expression)
```

Recursively applies all registered translators to `expression` and returns the rewritten result. The concrete expression type. The expression to rewrite. The rewritten expression.

