---
title: "LanguageQueryable<T>"
---

# LanguageQueryable&lt;T&gt;

_internal class_

Namespace: `Industria4.Linq.Languages`

Source: `src/Shared/Linq/Languages/LanguageQueryable.cs`

## Constructors

### LanguageQueryable

_constructor_

```csharp
LanguageQueryable(Expression expression,IQueryProvider originalQueryProvider,CultureInfo culture)
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

