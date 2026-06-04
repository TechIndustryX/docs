---
title: "WorkOrderClient"
---

# WorkOrderClient

_public class_

Namespace: `Industria4.Mes.Http`

Source: `src/Mes/Mes.Http/WorkOrderClient.cs`

## Summary

HTTP client for querying and managing work orders via the MES REST API.

## Constructors

### WorkOrderClient

_constructor_

```csharp
WorkOrderClient(RestClient restClient,IOptions<HttpMesOptions> options)
```

Initializes a new . The underlying REST client. Options containing the service base URI.

## Methods

### AddAsync

_method_

```csharp
Task AddAsync(AddWorkOrderCommand command,CancellationToken token = default)
```

Creates a new work order.

### AddQuantityAsync

_method_

```csharp
Task AddQuantityAsync(AddQuantityWorkOrderCommand command,CancellationToken token = default)
```

Adds a produced or waste quantity increment to a work order.

### ChangePriorityAsync

_method_

```csharp
Task ChangePriorityAsync(ChangeWorkOrderPriorityCommand command,CancellationToken token = default)
```

Changes the scheduling priorities of one or more work orders.

### ChangeStateAsync

_method_

```csharp
Task ChangeStateAsync(ChangeWorkOrderStateCommand command,CancellationToken token = default)
```

Transitions a work order to a new lifecycle state.

### DeleteAsync

_method_

```csharp
Task DeleteAsync(string id,CancellationToken token = default)
```

Deletes the work order with the specified identifier.

### GetAsync

_method_

```csharp
Task<DomainModel.WorkOrder.WorkOrder> GetAsync(string id,CancellationToken token = default)
```

Retrieves the full domain work order for the given identifier.

### GetNextAsync

_method_

```csharp
Task<DomainModel.WorkOrder.WorkOrder> GetNextAsync(CancellationToken token = default)
```

Returns the next scheduled work order, or `null` if none is available.

### SetQuantityAsync

_method_

```csharp
Task SetQuantityAsync(SetQuantityWorkOrderCommand command,CancellationToken token = default)
```

Overwrites the produced or waste quantity of a work order.

### UpdateAsync

_method_

```csharp
Task UpdateAsync(UpdateWorkOrderCommand command,CancellationToken token = default)
```

Updates an existing work order.

