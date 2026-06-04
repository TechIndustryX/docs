---
title: "QueryableExtensions"
---

# QueryableExtensions

_public class_

Namespace: `System.Linq`

Source: `src/Shared/Web.Forms/Extensions/QuickGridExtensions.cs`

## Summary

Extension methods for that apply dynamic filtering and sorting by property name.

## Methods

### ApplyFilter

_method_

```csharp
IQueryable<T> ApplyFilter<T>(this IQueryable<T> query,string propertyName,string @operator,object value)
```

Applies a dynamic filter to `query` by the given property name, operator, and value. The element type. The queryable to filter. The name of the property to filter on. The comparison operator (e.g. `"="`, `"contains"`). The value to compare against. A filtered queryable.

### ApplyQuickGridPagination

_method_

```csharp
IQueryable<T> ApplyQuickGridPagination<T>(this IQueryable<T> query,GridItemsProviderRequest<T> request)
```

Applies pagination from GridItemsProviderRequest to IQueryable The entity type The queryable to paginate The GridItemsProviderRequest containing pagination information Paginated queryable

### ApplyQuickGridRequest

_method_

```csharp
IQueryable<T> ApplyQuickGridRequest<T>(this IQueryable<T> query,GridItemsProviderRequest<T> request)
```

Applies all QuickGrid operations (sorting and pagination) to IQueryable The entity type The queryable to process The GridItemsProviderRequest Processed queryable with sorting and pagination applied

### ApplyQuickGridSorting

_method_

```csharp
IQueryable<T> ApplyQuickGridSorting<T>(this IQueryable<T> query,GridItemsProviderRequest<T> request)
```

Applies sorting from GridItemsProviderRequest to IQueryable using dynamic property resolution The entity type The queryable to sort The GridItemsProviderRequest containing sort information Sorted queryable

### ApplySort

_method_

```csharp
IQueryable<T> ApplySort<T>(this IQueryable<T> query,string propertyName,bool descending = false)
```

Applies dynamic ordering to `query` by the given property name. The element type. The queryable to sort. The name of the property to sort by. When `true` sorts in descending order. An ordered queryable.

