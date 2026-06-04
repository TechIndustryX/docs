---
title: "WorkOrderQuantityAddedEvent"
---

# WorkOrderQuantityAddedEvent

_public class_

Namespace: `Industria4.Mes.Cqrs.Events.WorkOrder`

Source: `src/Mes/Mes.Cqrs/Events/WorkOrder/WorkOrderQuantityAddedEvent.cs`

## Summary

Domain event raised when a quantity (good or waste) is added to a work order.

## Constructors

### WorkOrderQuantityAddedEvent

_constructor_

```csharp
WorkOrderQuantityAddedEvent(string id,double quantity,bool waste,bool? userChange,MetadataDictionary metadata)
```

Initializes a new .

## Properties

### Metadata

_property_

```csharp
MetadataDictionary Metadata
```

Gets the metadata associated with this event.

### Quantity

_property_

```csharp
double? Quantity
```

Gets the quantity that was added.

### UserChange

_property_

```csharp
bool? UserChange
```

Gets a value indicating whether a user triggered the addition.

### Waste

_property_

```csharp
bool Waste
```

Gets a value indicating whether the quantity is waste.

