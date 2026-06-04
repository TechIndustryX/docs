---
title: "WorkOrderChange"
---

# WorkOrderChange

_public class_

Namespace: `Industria4.Mes.DomainModel.WorkOrder`

Source: `src/Mes/Mes.DomainModel/WorkOrder/WorkOrderChange.cs`

## Summary

Records a single state-change or quantity update applied to a .

## Constructors

### WorkOrderChange

_constructor_

```csharp
WorkOrderChange(string id,string workOrderId,DateTimeOffset date,WorkOrderState state,double? quantity,bool? waste,bool? userChange)
```

Initializes a new work-order change record. Unique identifier for this change record. The identifier of the associated work order. The timestamp of the change. The new state of the work order at the time of the change. The quantity reported by the change, or `null` if not applicable. Whether the reported quantity represents waste, or `null` if not applicable. Whether the change was initiated by a user action, or `null` if not applicable.

## Properties

### Date

_property_

```csharp
DateTimeOffset Date
```

Gets the timestamp when this change was recorded.

### Id

_property_

```csharp
string Id
```

### Metadata

_property_

```csharp
MetadataDictionary Metadata
```

Gets the arbitrary key/value metadata for this change (lazily initialised).

### Quantity

_property_

```csharp
double? Quantity
```

Gets or sets the reported quantity for this change, or `null` if not applicable.

### State

_property_

```csharp
WorkOrderState State
```

Gets the work-order state at the time of this change.

### UserChange

_property_

```csharp
bool? UserChange
```

Gets a value indicating whether this change was triggered by a user.

### Waste

_property_

```csharp
bool? Waste
```

Gets a value indicating whether the quantity represents waste.

### WorkOrderId

_property_

```csharp
string WorkOrderId
```

Gets the identifier of the work order this change belongs to.

