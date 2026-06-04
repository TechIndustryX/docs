---
title: "DataAccessObject<TReadModel, TDatabase>"
---

# DataAccessObject&lt;TReadModel, TDatabase&gt;

_public class_

Namespace: `Industria4.LiteDB.DataAccessObject`

Source: `src/Shared/LiteDB/DataAccessObject/DataAccessObject.cs`

## Summary

Base object for querying model using

## Constructors

### DataAccessObject

_constructor_

```csharp
DataAccessObject(TDatabase context)
```

Initialises a new instance with the given LiteDB database. The `TDatabase` to use for queries.

## Properties

### Collection

_property_

```csharp
LiteCollection<TReadModel> Collection
```

Gets the collection

### Database

_property_

```csharp
TDatabase Database
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

