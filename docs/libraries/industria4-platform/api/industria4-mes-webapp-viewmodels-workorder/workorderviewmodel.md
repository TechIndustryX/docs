---
title: "WorkOrderViewModel"
---

# WorkOrderViewModel

_public class_

Namespace: `Industria4.Mes.WebApp.ViewModels.WorkOrder`

Source: `src/Mes/Mes.WebApp/ViewModels/WorkOrder/WorkOrderViewModel.cs`

## Summary

View model for the work-order edit form. Tracks field changes, coordinates state transitions, and handles save/load round-trips via the MES HTTP client.

## Constructors

### WorkOrderViewModel

_constructor_

```csharp
WorkOrderViewModel(IServiceProvider serviceProvider)
```

Initialises a new resolving required services from `serviceProvider`.

## Properties

### HasChanges

_property_

```csharp
bool HasChanges
```

Gets a value indicating whether any field has been modified since the last load or save.

### IsNew

_property_

```csharp
bool IsNew
```

Gets or sets a value indicating whether this view model represents a not-yet-persisted (new) work order. Defaults to `true`.

### TotalQuantity

_property_

```csharp
double TotalQuantity
```

Gets the combined (done + waste) quantity; recomputed whenever either component changes.

## Methods

### ChangeQuantityAsync

_method_

```csharp
Task ChangeQuantityAsync(bool delta,bool waste,double value)
```

Applies a quantity change (additive delta or absolute set) after raising the event. `true` to add `value` to the current quantity; `false` to replace it. `true` to record the quantity as waste/scrap. The quantity value to apply.

### EvaluateCanChange

_method_

```csharp
bool EvaluateCanChange(WorkOrderState state)
```

Returns `true` if transitioning to `state` is currently allowed by the domain model rules.

### LoadAsync

_method_

```csharp
Task LoadAsync(string id)
```

Loads the work order identified by `id` from the server and populates all fields; creates a blank new-record state when `id` is empty.

### RaisePropertyChanged

_method_

```csharp
void RaisePropertyChanged(string propertyName = null)
```

Overrides base change notification to also set the internal `_hasChanges` flag, ensuring reflects UI edits.

### SaveAsync

_method_

```csharp
Task SaveAsync()
```

Persists the current field values by sending an add or update command, then reloads the view model. Navigates to the edit URL after a successful add.

### SetStateAsync

_method_

```csharp
Task SetStateAsync(WorkOrderState state)
```

Prompts the user (and any registered event subscribers) before changing the work-order state; persists unsaved changes on request. The target state to transition to.

## Events

### ChangingQuantityAsync

_event_

```csharp
event AsyncEventHandler<ChangeQuantityEventArgs> ChangingQuantityAsync
```

Raised asynchronously before a quantity change is applied, allowing subscribers to cancel or inject metadata via .

### ChangingState

_event_

```csharp
event EventHandler<ChangeStateEventArgs> ChangingState
```

Raised synchronously before a state change is applied, allowing subscribers to cancel the operation via .

### ChangingStateAsync

_event_

```csharp
event AsyncEventHandler<ChangeStateEventArgs> ChangingStateAsync
```

Raised asynchronously before a state change is applied, allowing subscribers to cancel the operation via .

