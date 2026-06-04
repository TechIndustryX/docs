---
title: "SqlLiteFunctions"
---

# SqlLiteFunctions

_public class_

Namespace: `Industria4.EntityFramework`

Source: `src/Shared/EntityFramework/SqliteFunctions.cs`

## Summary

Exposes SQLite functions which can be used with Entity Framework via database function mapping.

## Methods

### JsonExtract

_method_

```csharp
string JsonExtract(string expression,string path)
```

Returns the string value at the specified JSON path within the expression. The JSON text to query. The JSON path (e.g. `$.key`). The string value found at the path, or `null` when not found.

