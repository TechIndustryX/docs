---
title: "LinqExtensions"
---

# LinqExtensions

_public class_

Namespace: `System.Linq`

Source: `src/Shared/Http/LinqExtensions.cs`

## Summary

Extension methods that add OData-specific LINQ operators (`$filter` and `$orderby` raw strings) to pipelines.

## Methods

### OrderByOData

_method_

```csharp
IQueryable<T> OrderByOData<T>(this IQueryable<T> source,string member)
```

Appends an OData `$orderby` clause expressed as a raw member string. The element type of the queryable. The queryable to order. The raw OData order expression (e.g. `Name asc`). A new queryable with the ordering applied.

### WhereOData

_method_

```csharp
IQueryable<T> WhereOData<T>(this IQueryable<T> source,string filter)
```

Appends an OData `$filter` clause expressed as a raw filter string. The element type of the queryable. The queryable to filter. The raw OData filter expression (e.g. `Name eq 'Alice'`). A new queryable with the filter applied.

