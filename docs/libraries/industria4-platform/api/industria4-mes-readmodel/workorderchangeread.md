---
title: "WorkOrderChangeRead"
---

# WorkOrderChangeRead

_public class_

Namespace: `Industria4.Mes.ReadModel`

Source: `src/Mes/Mes.ReadModel/WorkOrderChangeRead.cs`

## Summary

Read model representing a work-order change record as returned by the MES query stack.

## Properties

### Date

_property_

```csharp
DateTimeOffset Date
```

Gets or sets the timestamp when this change was recorded.

### Id

_property_

```csharp
string Id
```

Gets or sets the unique identifier for this change record.

### Metadata

_property_

```csharp
Dictionary<string,object> Metadata
```

Gets or sets the deserialized metadata dictionary.

### MetadataJson

_property_

```csharp
string MetadataJson
```

Gets or sets the raw JSON metadata string (not serialized to API responses).

### OrderNumber

_property_

```csharp
string OrderNumber
```

Gets or sets the external order reference number at the time of the change.

### Quantity

_property_

```csharp
double? Quantity
```

Gets or sets the quantity reported by this change, or `null` if not applicable.

### State

_property_

```csharp
WorkOrderState State
```

Gets or sets the work-order state at the time of this change.

### UserChange

_property_

```csharp
bool? UserChange
```

Gets or sets a value indicating whether the change was triggered by a user.

### WorkOrderId

_property_

```csharp
string WorkOrderId
```

Gets or sets the identifier of the associated work order.

