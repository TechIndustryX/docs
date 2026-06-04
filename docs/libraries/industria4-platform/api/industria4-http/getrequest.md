---
title: "GetRequest<T, TResult>"
---

# GetRequest&lt;T, TResult&gt;

_public class_

Namespace: `Industria4.Http`

Source: `src/Shared/Http/GetRequest.cs`

## Summary

Encapsulates a GET query, pairing a projection factory with an optional total-count request. The source entity type. The projected result type.

## Properties

### QueryFactory

_property_

```csharp
Func<IQueryable<T>,IQueryable<TResult>> QueryFactory
```

Gets or sets the function that applies filtering, ordering, and projection to the source queryable.

### WithCount

_property_

```csharp
bool WithCount
```

Gets or sets a value indicating whether the total item count should be returned alongside the results.

