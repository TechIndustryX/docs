---
title: "DbMultiMapRepository<TEntity, TDataModel, TDatabase>"
---

# DbMultiMapRepository&lt;TEntity, TDataModel, TDatabase&gt;

_public class_

Namespace: `Industria4.LiteDB.Repository`

Source: `src/Shared/LiteDB/Repository/DbMultiMapRepository.cs`

## Summary

Base repository implementation based on dedicated to a specific type

## Constructors

### DbMultiMapRepository

_constructor_

```csharp
DbMultiMapRepository(TDatabase database)
```

Initialises a new instance with the given LiteDB database. The `TDatabase` to use for persistence operations.

## Properties

### Collection

_property_

```csharp
LiteCollection<TDataModel> Collection
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

### ToDataModel

_method_

```csharp
TDataModel ToDataModel(TEntity entity)
```

Populates the data model using entity info This method is called while adding or updating an entity

### ToDomainModel

_method_

```csharp
TEntity ToDomainModel(TDataModel dataModel)
```

Converts the data model to a new entity instance This method is called while reading a new entity

