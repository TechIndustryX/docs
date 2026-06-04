---
title: "WorkOrders"
---

# WorkOrders

_public class_

Namespace: `Industria4.Mes.WebApp.Views.WorkOrder`

Source: `src/Mes/Mes.WebApp/Views/WorkOrder/WorkOrders.razor.cs`

## Summary

Blazor page component for the work-orders list view.

## Properties

### PublicViewModel

_property_

```csharp
WorkOrdersViewModel PublicViewModel
```

Gets the public view model exposed to child components via cascading values.

## Methods

### Dispose

_method_

```csharp
void Dispose(bool disposing)
```

### OnAfterRenderAsync

_method_

```csharp
Task OnAfterRenderAsync(bool firstRender)
```

### OnInitialized

_method_

```csharp
void OnInitialized()
```

### SetSort

_method_

```csharp
Task SetSort(string[] ids)
```

Updates the priority order of the specified work orders when the user drags and drops rows in the grid.

