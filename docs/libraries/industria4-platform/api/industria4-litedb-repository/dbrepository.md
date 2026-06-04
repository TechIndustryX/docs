---
title: "DbRepository<T, TDatabase>"
---

# DbRepository&lt;T, TDatabase&gt;

_public class_

Namespace: `Industria4.LiteDB.Repository`

Source: `src/Shared/LiteDB/Repository/DbRepository.cs`

## Summary

Base repository implementation based on dedicated to a specific type

## Constructors

### DbRepository

_constructor_

```csharp
DbRepository(TDatabase context)
```

Initialises a new instance with the given LiteDB database. The `TDatabase` to use for persistence operations.

## Properties

### Collection

_property_

```csharp
LiteCollection<T> Collection
```

Gets the for the type

### Database

_property_

```csharp
TDatabase Database
```

Gets the current

## Methods

### OnAddAsync

_method_

```csharp
Task OnAddAsync(T entity)
```

### OnExistAsync

_method_

```csharp
Task<bool> OnExistAsync(string id)
```

### OnGetAsync

_method_

```csharp
Task<T> OnGetAsync(string id)
```

### OnRemoveAsync

_method_

```csharp
Task OnRemoveAsync(string id)
```

### OnUpdateAsync

_method_

```csharp
Task OnUpdateAsync(T entity)
```

