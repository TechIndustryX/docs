---
title: "DbMultiAutoMapperRepository<TEntity, TDataModel, TDatabase>"
---

# DbMultiAutoMapperRepository&lt;TEntity, TDataModel, TDatabase&gt;

_public class_

Namespace: `Industria4.LiteDB.Repository`

Source: `src/Shared/LiteDB/Repository/DbMultiAutoMapperRepository.cs`

## Summary

Base repository implementation based on dedicated to a specific type

## Constructors

### DbMultiAutoMapperRepository

_constructor_

```csharp
DbMultiAutoMapperRepository(TDatabase database,IMapper mapper)
```

Initialises a new instance with the given LiteDB database and AutoMapper instance. The `TDatabase` to use for persistence operations. The AutoMapper instance that maps between `TEntity` and `TDataModel`.

## Properties

### Mapper

_property_

```csharp
IMapper Mapper
```

Gets the AutoMapper instance used to convert between entity and data-model types.

## Methods

### ToDataModel

_method_

```csharp
TDataModel ToDataModel(TEntity entity)
```

### ToDomainModel

_method_

```csharp
TEntity ToDomainModel(TDataModel dataModel)
```

