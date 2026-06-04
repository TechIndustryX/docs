---
title: "DbRepository<T, TDbContext>"
---

# DbRepository&lt;T, TDbContext&gt;

_public class_

Namespace: `Industria4.EntityFramework.Repository`

Source: `src/Shared/EntityFramework/Repository/DbRepository.cs`

## Summary

Base repository implementation based on dedicated to a specific type

## Constructors

### DbRepository

_constructor_

```csharp
DbRepository(TDbContext context)
```

Initialises a new instance with the given database context. The `TDbContext` to use for persistence operations.

## Properties

### Context

_property_

```csharp
TDbContext Context
```

Gets the current

### DbSet

_property_

```csharp
DbSet<T> DbSet
```

Gets the for the type

## Methods

### BeginTransactionAsync

_method_

```csharp
Task<IRepositoryTransaction> BeginTransactionAsync(CancellationToken token = default)
```

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

