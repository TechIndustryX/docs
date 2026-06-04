---
title: "WorkOrdersViewModel"
---

# WorkOrdersViewModel

_public class_

Namespace: `Industria4.Mes.WebApp.ViewModels.WorkOrder`

Source: `src/Mes/Mes.WebApp/ViewModels/WorkOrder/WorkOrdersViewModel.cs`

## Summary

View model for the work-orders list page. Handles search, filtering, grid data loading, and priority re-ordering.

## Properties

### RefreshImplementation

_property_

```csharp
Func<Task> RefreshImplementation
```

## Methods

### NewWorkOrderAsync

_method_

```csharp
Task NewWorkOrderAsync()
```

Navigates to the new work-order creation page.

### RefreshAsync

_method_

```csharp
Task RefreshAsync()
```

Re-executes the grid data provider to reload the list from the server.

### SelectWorkOrder

_method_

```csharp
void SelectWorkOrder(WorkOrderRead workOrder)
```

Selects a work order and navigates to edit view

## Events

### Loading

_event_

```csharp
event EventHandler<LoadingDataEventArgs> Loading
```

Raised when the grid data provider builds the OData query, allowing external consumers to add extra filter predicates.

