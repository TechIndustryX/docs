---
title: "Extensions"
---

# Extensions

_public class_

Namespace: `Industria4.DataAccessObject`

Source: `src/Shared/DataAccessObject/Extensions.cs`

## Summary

Extension methods for that expose soft-deleted entity queries.

## Methods

### GetAll

_method_

```csharp
IQueryable<T> GetAll<T>(this IDataAccessObject<T> dao)
```

Returns the list of all entities, deleted and not

### GetDeleted

_method_

```csharp
IQueryable<T> GetDeleted<T>(this IDataAccessObject<T> dao)
```

Returns the list of entities that have been deleted

