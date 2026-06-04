---
title: "MesEvents"
---

# MesEvents

_public class_

Namespace: `Industria4`

Source: `src/Mes/Mes.Cqrs.Handlers/MesEvents.cs`

## Summary

Top-level MES event-ID container that groups event ranges by aggregate type.

## Properties

### WorkOrder

_property_

```csharp
IAvailableEntityEvents<WorkOrderType> WorkOrder
```

Gets the structured-log event-ID range for the `WorkOrder` aggregate (base ID 6000).

