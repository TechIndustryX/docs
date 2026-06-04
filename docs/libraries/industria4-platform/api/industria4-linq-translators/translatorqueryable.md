---
title: "TranslatorQueryable<T>"
---

# TranslatorQueryable&lt;T&gt;

_internal class_

Namespace: `Industria4.Linq.Translators`

Source: `src/Shared/Linq/Translators/TranslatorQueryable.cs`

## Constructors

### TranslatorQueryable

_constructor_

```csharp
TranslatorQueryable(Expression expression,IExpressionTranslatorProvider translatorProvider,IQueryProvider originalQueryProvider)
```

### TranslatorQueryable

_constructor_

```csharp
TranslatorQueryable(Expression expression,IExpressionTranslatorProvider translatorProvider,TranslatorQueryable<T> original)
```

## Properties

### ElementType

_property_

```csharp
Type ElementType
```

### Expression

_property_

```csharp
Expression Expression
```

### Provider

_property_

```csharp
IQueryProvider Provider
```

### TranslatorProvider

_property_

```csharp
IExpressionTranslatorProvider TranslatorProvider
```

## Methods

### CreateQuery

_method_

```csharp
IQueryable CreateQuery(Expression expression)
```

### CreateQuery

_method_

```csharp
IQueryable<TElement> CreateQuery<TElement>(Expression expression)
```

### Execute

_method_

```csharp
object Execute(Expression expression)
```

### Execute

_method_

```csharp
TResult Execute<TResult>(Expression expression)
```

### ExecuteAsync

_method_

```csharp
TResult ExecuteAsync<TResult>(Expression expression,CancellationToken cancellationToken)
```

### GetEnumerator

_method_

```csharp
IEnumerator<T> GetEnumerator()
```

