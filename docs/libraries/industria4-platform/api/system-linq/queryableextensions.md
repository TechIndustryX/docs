---
title: "QueryableExtensions"
---

# QueryableExtensions

_public class_

Namespace: `System.Linq`

Source: `src/Shared/Linq/QueryableExtensions.cs`

## Summary

Extension methods for that add filtering helpers operating on expressions.

## Methods

### In

_method_

```csharp
IQueryable<T> In<T,TValue>(this IQueryable<T> query,Expression<Func<T,TValue>> property,IEnumerable<TValue> values)
```

Filters items by the property and specified values

### WhereAndDictionary

_method_

```csharp
IQueryable<T> WhereAndDictionary<T,TValue>(this IQueryable<T> query,Expression<Func<T,TValue>> property,IDictionary<string,object> dictionary,ExpressionType type)
```

Applies a filter to a property of type dictionary using all the possibile values and a operator

### WhereOrDictionary

_method_

```csharp
IQueryable<T> WhereOrDictionary<T,TValue>(this IQueryable<T> query,Expression<Func<T,TValue>> property,IDictionary<string,object> dictionary,ExpressionType type)
```

Applies a filter to a property of type dictionary using one of the possibile values and a operator

