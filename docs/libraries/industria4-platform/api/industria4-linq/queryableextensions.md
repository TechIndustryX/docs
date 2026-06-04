---
title: "QueryableExtensions"
---

# QueryableExtensions

_public class_

Namespace: `Industria4.Linq`

Source: `src/Shared/Linq/Languages/QueryableExtensions.cs`

## Summary

Extension methods for that scope query evaluation to a specific .

## Methods

### WithDefaultLanguage

_method_

```csharp
IQueryable<T> WithDefaultLanguage<T>(this IQueryable<T> queryable)
```

Filters the query applying the default language to the language translator

### WithLanguage

_method_

```csharp
IQueryable<T> WithLanguage<T>(this IQueryable<T> queryable,CultureInfo culture)
```

Filters the query applying the specified language to the language translator

