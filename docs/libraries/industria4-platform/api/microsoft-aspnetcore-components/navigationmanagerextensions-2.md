---
title: "NavigationManagerExtensions"
---

# NavigationManagerExtensions

_public class_

Namespace: `Microsoft.AspNetCore.Components`

Source: `src/Mes/Mes.WebApp/Routing/NavigationManagerExtensions.cs`

## Summary

Extension methods on for MES-specific navigation.

## Methods

### NavigateToEditWorkOrder

_method_

```csharp
void NavigateToEditWorkOrder(this NavigationManager navigationManager,string workOrderId)
```

Navigates to the edit page for an existing work order. The current . The unique identifier of the work order to edit.

### NavigateToNewWorkOrder

_method_

```csharp
void NavigateToNewWorkOrder(this NavigationManager navigationManager)
```

Navigates to the new work-order creation page.

### NavigateToWorkOrders

_method_

```csharp
void NavigateToWorkOrders(this NavigationManager navigationManager)
```

Navigates to the work-orders list page.

