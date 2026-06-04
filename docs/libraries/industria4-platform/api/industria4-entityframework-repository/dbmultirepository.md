---
title: "DbMultiRepository<T, TDbContext>"
---

# DbMultiRepository&lt;T, TDbContext&gt;

_public class_

Namespace: `Industria4.EntityFramework.Repository`

Source: `src/Shared/EntityFramework/Repository/DbMultiRepository.cs`

## Summary

Base repository implementation based on dedicated to a specific type

## Constructors

### DbMultiRepository

_constructor_

```csharp
DbMultiRepository(TDbContext context)
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

