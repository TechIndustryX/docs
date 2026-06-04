---
title: "WorkOrderStateChangedEvent"
---

# WorkOrderStateChangedEvent

_public class_

Namespace: `Industria4.Mes.Cqrs.Events.WorkOrder`

Source: `src/Mes/Mes.Cqrs/Events/WorkOrder/WorkOrderStateChangedEvent.cs`

## Summary

Domain event raised when the lifecycle state of a work order changes.

## Constructors

### WorkOrderStateChangedEvent

_constructor_

```csharp
WorkOrderStateChangedEvent(string id,WorkOrderState state,MetadataDictionary metadata)
```

Initializes a new .

## Properties

### Metadata

_property_

```csharp
MetadataDictionary Metadata
```

Gets the metadata associated with this event.

### State

_property_

```csharp
WorkOrderState State
```

Gets the new lifecycle state of the work order.

