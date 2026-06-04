---
title: "AutoMapperDataAccessObject<TDataModel, TReadModel, TDbContext>"
---

# AutoMapperDataAccessObject&lt;TDataModel, TReadModel, TDbContext&gt;

_public class_

Namespace: `Industria4.EntityFramework.DataAccessObject`

Source: `src/Shared/EntityFramework/DataAccessObject/AutoMapperDataAccessObject.cs`

## Summary

Base object for querying model using . The implementation support a data model and uses AutoMapper for mapping data

## Constructors

### AutoMapperDataAccessObject

_constructor_

```csharp
AutoMapperDataAccessObject(TDbContext context,IMapper mapper)
```

Initialises a new instance with the given context and AutoMapper instance. The `TDbContext` to use for queries. The AutoMapper mapper used to project `TDataModel` to `TReadModel`.

## Properties

### Mapper

_property_

```csharp
IMapper Mapper
```

Gets the AutoMapper instance used for projecting data models to read models.

### Query

_property_

```csharp
IQueryable<TReadModel> Query
```

