---
title: "DbMapRepository<TEntity, TDataModel, TDbContext>"
---

# DbMapRepository&lt;TEntity, TDataModel, TDbContext&gt;

_public class_

Namespace: `Industria4.EntityFramework.Repository`

Source: `src/Shared/EntityFramework/Repository/DbMapRepository.cs`

## Summary

Base repository based on which map entity to a data model

## Constructors

### DbMapRepository

_constructor_

```csharp
DbMapRepository(TDbContext context)
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

### HashValue

_method_

```csharp
byte[] HashValue(string value)
```

### LoadDataModelAsync

_method_

```csharp
ValueTask<TDataModel> LoadDataModelAsync(string id)
```

### OnAddAsync

_method_

```csharp
Task OnAddAsync(TEntity entity)
```

### OnExistAsync

_method_

```csharp
Task<bool> OnExistAsync(string id)
```

### OnGetAsync

_method_

```csharp
Task<TEntity> OnGetAsync(string id)
```

### OnRemoveAsync

_method_

```csharp
Task OnRemoveAsync(string id)
```

### OnUpdateAsync

_method_

```csharp
Task OnUpdateAsync(TEntity entity)
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

Recursively removes a data-model value and all its owned EF-tracked children from the change tracker. The root object to delete.

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

