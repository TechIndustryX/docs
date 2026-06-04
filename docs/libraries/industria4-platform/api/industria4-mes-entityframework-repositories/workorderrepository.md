---
title: "WorkOrderRepository"
---

# WorkOrderRepository

_internal class_

Namespace: `Industria4.Mes.EntityFramework.Repositories`

Source: `src/Mes/Mes.EntityFramework/Repositories/WorkOrderRepository.cs`

## Constructors

### WorkOrderRepository

_constructor_

```csharp
WorkOrderRepository(MesContext context,ILogger<WorkOrderRepository> logger)
```

Initialises a new repository instance bound to the provided `context`.

## Methods

### OnAddAsync

_method_

```csharp
Task OnAddAsync(IEnumerable<WorkOrder> entities)
```

### OnUpdateAsync

_method_

```csharp
Task OnUpdateAsync(IEnumerable<WorkOrder> entities)
```

### ToDataModel

_method_

```csharp
void ToDataModel(WorkOrder entity,DataModel.WorkOrder.WorkOrder dataModel)
```

### ToDomainModel

_method_

```csharp
WorkOrder ToDomainModel(DataModel.WorkOrder.WorkOrder dataModel)
```

