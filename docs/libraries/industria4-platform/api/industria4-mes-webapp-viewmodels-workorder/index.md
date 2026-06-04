---
title: "Industria4.Mes.WebApp.ViewModels.WorkOrder"
---

# Industria4.Mes.WebApp.ViewModels.WorkOrder

This namespace contains 8 public API types.

## Types

- [ChangeQuantityEventArgs](./changequantityeventargs.md) _class_ - Event arguments for a work-order quantity-change request. Set to `true` to abort or populate to attach extra data.
- [ChangeStateEventArgs](./changestateeventargs.md) _class_ - Event arguments for a work-order state-change request. Set to `true` to abort the transition.
- [ChangesViewModel](./changesviewmodel.md) _class_ - View model for the work-order change-history page. Loads the list of state and quantity changes for a given work order.
- [LoadingDataEventArgs](./loadingdataeventargs.md) _class_ - Event arguments passed to the event. Subscribers may replace or extend to add extra filter predicates.
- [SortOrder](./sortorder.md) _enum_ - Specifies the sort direction for work-order grid columns.
- [WorkOrdersViewModel](./workordersviewmodel.md) _class_ - View model for the work-orders list page. Handles search, filtering, grid data loading, and priority re-ordering.
- [WorkOrderViewModel](./workorderviewmodel.md) _class_ - View model for the work-order edit form. Tracks field changes, coordinates state transitions, and handles save/load round-trips via the MES HTTP client.
- [WorkOrderViewModelBase](./workorderviewmodelbase.md) _class_ - Abstract base view model shared by the work-order edit and changes views. Manages the navigation menu scope and exposes common services.
