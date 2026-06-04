---
title: "WorkOrderChangedEvent"
---

# WorkOrderChangedEvent

_public class_

Namespace: `Industria4.Mes.Cqrs.Events.WorkOrder`

Source: `src/Mes/Mes.Cqrs/Events/WorkOrder/WorkOrderChangedEvent.cs`

## Summary

Domain event raised when a work order is updated (state or data change).

## Constructors

### WorkOrderChangedEvent

_constructor_

```csharp
WorkOrderChangedEvent(string id,MetadataDictionary metadata)
```

Initializes a new . The work-order identifier. Metadata associated with the change.

## Properties

### Metadata

_property_

```csharp
MetadataDictionary Metadata
```

Gets the metadata associated with this event.

