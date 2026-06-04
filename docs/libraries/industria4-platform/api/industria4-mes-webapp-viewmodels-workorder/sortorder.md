---
title: "SortOrder"
---

# SortOrder

_public enum_

Namespace: `Industria4.Mes.WebApp.ViewModels.WorkOrder`

Source: `src/Mes/Mes.WebApp/ViewModels/WorkOrder/WorkOrdersViewModel.cs`

## Summary

Specifies the sort direction for work-order grid columns.

## Methods

### ChangePriorityAsync

_method_

```csharp
Task ChangePriorityAsync(IEnumerable<string> ids)
```

Reassigns priority values for the supplied work-order identifiers to match the given visual order, then persists the changes via a batch command. Ordered sequence of work-order identifiers reflecting the desired priority order.

