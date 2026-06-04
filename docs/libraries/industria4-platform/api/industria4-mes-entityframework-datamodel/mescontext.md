---
title: "MesContext"
---

# MesContext

_internal class_

Namespace: `Industria4.Mes.EntityFramework.DataModel`

Source: `src/Mes/Mes.EntityFramework/DataModel/MesContext.cs`

## Constructors

### MesContext

_constructor_

```csharp
MesContext(DbContextOptions<MesContext> options)
```

## Properties

### WorkOrderChanges

_property_

```csharp
DbSet<WorkOrder.WorkOrderChange> WorkOrderChanges
```

### WorkOrders

_property_

```csharp
DbSet<WorkOrder.WorkOrder> WorkOrders
```

## Methods

### OnModelCreating

_method_

```csharp
void OnModelCreating(ModelBuilder modelBuilder)
```

