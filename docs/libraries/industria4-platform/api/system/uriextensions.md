---
title: "UriExtensions"
---

# UriExtensions

_public class_

Namespace: `System`

Source: `src/Shared/Http/UriExtensions.cs`

## Summary

Extension methods for that simplify query string construction.

## Methods

### AddQueryString

_method_

```csharp
Uri AddQueryString(this Uri uri,IDictionary<string,object> values)
```

Returns a new with the provided key-value pairs appended as a query string. The base URI to extend. A dictionary of query parameter names and their values. A new with the query string appended.

