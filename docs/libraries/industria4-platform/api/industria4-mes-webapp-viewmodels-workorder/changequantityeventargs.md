---
title: "ChangeQuantityEventArgs"
---

# ChangeQuantityEventArgs

_public class_

Namespace: `Industria4.Mes.WebApp.ViewModels.WorkOrder`

Source: `src/Mes/Mes.WebApp/ViewModels/WorkOrder/WorkOrderViewModel.cs`

## Summary

Event arguments for a work-order quantity-change request. Set to `true` to abort or populate to attach extra data.

## Constructors

### ChangeQuantityEventArgs

_constructor_

```csharp
ChangeQuantityEventArgs(bool delta,bool waste,double value)
```

Initialises a new instance with the specified parameters.

## Properties

### Cancel

_property_

```csharp
bool Cancel
```

Gets or sets a value indicating whether the quantity change should be cancelled. Defaults to `false`.

### Delta

_property_

```csharp
bool Delta
```

Gets a value indicating whether the change is additive (delta) or absolute (set).

### Metadata

_property_

```csharp
MetadataDictionary Metadata
```

Gets a metadata dictionary that subscribers can populate before the command is sent.

### Value

_property_

```csharp
double Value
```

Gets the quantity value to apply.

### Waste

_property_

```csharp
bool Waste
```

Gets a value indicating whether the quantity is waste/scrap.

