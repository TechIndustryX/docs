---
title: "DbMultiRepository<T, TDatabase>"
---

# DbMultiRepository&lt;T, TDatabase&gt;

_public class_

Namespace: `Industria4.LiteDB.Repository`

Source: `src/Shared/LiteDB/Repository/DbMultiRepository.cs`

## Summary

Base repository implementation based on dedicated to a specific type

## Constructors

### DbMultiRepository

_constructor_

```csharp
DbMultiRepository(TDatabase database)
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
Task OnAddAsync(IEnumerable<T> entities)
```

### OnRemoveAsync

_method_

```csharp
Task OnRemoveAsync(IEnumerable<string> ids)
```

### OnUpdateAsync

_method_

```csharp
Task OnUpdateAsync(IEnumerable<T> entities)
```

