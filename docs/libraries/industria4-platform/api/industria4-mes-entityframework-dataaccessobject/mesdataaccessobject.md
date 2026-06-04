---
title: "MesDataAccessObject<TDataModel, TReadModel>"
---

# MesDataAccessObject&lt;TDataModel, TReadModel&gt;

_internal class_

Namespace: `Industria4.Mes.EntityFramework.DataAccessObject`

Source: `src/Mes/Mes.EntityFramework/DataAccessObject/MesDataAccessObject.cs`

## Constructors

### MesDataAccessObject

_constructor_

```csharp
MesDataAccessObject(MesContext context,MesMapper mapperAccessor)
```

Initialises a new data-access object with the EF context and mapper accessor.

## Properties

### Query

_property_

```csharp
IQueryable<TReadModel> Query
```

