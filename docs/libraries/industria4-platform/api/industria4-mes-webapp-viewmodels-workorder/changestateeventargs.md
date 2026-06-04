---
title: "ChangeStateEventArgs"
---

# ChangeStateEventArgs

_public class_

Namespace: `Industria4.Mes.WebApp.ViewModels.WorkOrder`

Source: `src/Mes/Mes.WebApp/ViewModels/WorkOrder/WorkOrderViewModel.cs`

## Summary

Event arguments for a work-order state-change request. Set to `true` to abort the transition.

## Constructors

### ChangeStateEventArgs

_constructor_

```csharp
ChangeStateEventArgs(WorkOrderState state)
```

Initialises a new instance with the target `state`.

## Properties

### Cancel

_property_

```csharp
bool Cancel
```

Gets or sets a value indicating whether the state change should be cancelled. Defaults to `false`.

### State

_property_

```csharp
WorkOrderState State
```

Gets the target state being requested.

