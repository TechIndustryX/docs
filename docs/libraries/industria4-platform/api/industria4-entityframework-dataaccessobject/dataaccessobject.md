---
title: "DataAccessObject<TReadModel, TDbContext>"
---

# DataAccessObject&lt;TReadModel, TDbContext&gt;

_public class_

Namespace: `Industria4.EntityFramework.DataAccessObject`

Source: `src/Shared/EntityFramework/DataAccessObject/DataAccessObject.cs`

## Summary

Base object for querying model using

## Constructors

### DataAccessObject

_constructor_

```csharp
DataAccessObject(TDbContext context)
```

Initialises a new instance with the given database context. The `TDbContext` to use for queries.

## Properties

### Context

_property_

```csharp
TDbContext Context
```

Gets the current

### Query

_property_

```csharp
IQueryable<TReadModel> Query
```

Gets a instance for current model

## Methods

### GetEnumerator

_method_

```csharp
IEnumerator<TReadModel> GetEnumerator()
```

