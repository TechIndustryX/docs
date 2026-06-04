---
title: "WorkOrderChangeRepository"
---

# WorkOrderChangeRepository

_internal class_

Namespace: `Industria4.Mes.EntityFramework.Repositories`

Source: `src/Mes/Mes.EntityFramework/Repositories/WorkOrderChangeRepository.cs`

## Constructors

### WorkOrderChangeRepository

_constructor_

```csharp
WorkOrderChangeRepository(MesContext context,ILogger<WorkOrderChangeRepository> logger)
```

Initialises a new repository instance bound to the provided `context`.

## Methods

### ToDataModel

_method_

```csharp
void ToDataModel(WorkOrderChange entity,DataModel.WorkOrder.WorkOrderChange dataModel)
```

### ToDomainModel

_method_

```csharp
WorkOrderChange ToDomainModel(DataModel.WorkOrder.WorkOrderChange dataModel)
```

