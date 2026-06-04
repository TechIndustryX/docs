---
title: "DbMultiMapRepository<TEntity, TDataModel, TDbContext>"
---

# DbMultiMapRepository&lt;TEntity, TDataModel, TDbContext&gt;

_public class_

Namespace: `Industria4.EntityFramework.Repository`

Source: `src/Shared/EntityFramework/Repository/DbMultiMapRepository.cs`

## Summary

Base repository based on which map entity to a data model

## Constructors

### DbMultiMapRepository

_constructor_

```csharp
DbMultiMapRepository(TDbContext context)
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
DbSet<TDataModel> DbSet
```

Gets the for the type

## Methods

### BeginTransactionAsync

_method_

```csharp
Task<IRepositoryTransaction> BeginTransactionAsync(CancellationToken token = default)
```

### HashValue

_method_

```csharp
byte[] HashValue(string value)
```

### OnAddAsync

_method_

```csharp
Task OnAddAsync(IEnumerable<TEntity> entities)
```

### OnRemoveAsync

_method_

```csharp
Task OnRemoveAsync(IEnumerable<string> ids)
```

### OnUpdateAsync

_method_

```csharp
Task OnUpdateAsync(IEnumerable<TEntity> entities)
```

### RecursiveDelete

_method_

```csharp
void RecursiveDelete(object value,HashSet<object> processed)
```

### RecursiveDelete

_method_

```csharp
void RecursiveDelete(object value)
```

### ShouldRecursiveDelete

_method_

```csharp
bool ShouldRecursiveDelete(object value)
```

### ToDataModel

_method_

```csharp
void ToDataModel(TEntity entity,TDataModel dataModel)
```

Populates the data model using entity info This method is called while adding or updating an entity

### ToDomainModel

_method_

```csharp
TEntity ToDomainModel(TDataModel dataModel)
```

Converts the data model to a new entity instance This method is called while reading a new entity

