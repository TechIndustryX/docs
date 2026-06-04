---
title: "ODataUriFactory"
---

# ODataUriFactory

_public class_

Namespace: `Industria4.Http`

Source: `src/Shared/Http/ODataUriFactory.cs`

## Summary

Builds OData query URI strings from LINQ expressions so that queries can be sent to an OData-compliant HTTP endpoint.

## Methods

### GetRelativeUriForQuery

_method_

```csharp
string GetRelativeUriForQuery<TEntity,TResult>(Func<IQueryable<TEntity>,IQueryable<TResult>> queryFactory)
```

Returns the relative OData URI for the given LINQ query against `TEntity` returning `TResult` items. The source entity type registered in the OData service. The projected result type. A function that applies LINQ operators to produce the desired OData query. A relative URI string with OData query options.

### GetRelativeUriForQuery

_method_

```csharp
string GetRelativeUriForQuery<TEntity,TResult>(string path,Func<IQueryable<TEntity>,IQueryable<TResult>> queryFactory)
```

Returns the relative OData URI for the given LINQ query, prepending the optional `path` prefix. The source entity type registered in the OData service. The projected result type. An optional URI path prefix to prepend. A function that applies LINQ operators to produce the desired OData query. A relative URI string with OData query options.

