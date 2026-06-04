---
title: "SqlConnectionCheck"
---

# SqlConnectionCheck

_public class_

Namespace: `Industria4.Web`

Source: `src/Shared/Web/SqlConnectionCheck.cs`

## Summary

Chech if connection to a SQL Server is available

## Constructors

### SqlConnectionCheck

_constructor_

```csharp
SqlConnectionCheck(ILogger<SqlConnectionCheck> logger,string connectionString)
```

Initialises a new SQL Server dependency check targeting the `master` database. Logger used for status messages. Connection string; the initial catalog is overridden with `master`.

## Methods

### WaitForReady

_method_

```csharp
Task WaitForReady()
```

