---
title: "MesEventsExtensions"
---

# MesEventsExtensions

_public class_

Namespace: `Industria4`

Source: `src/Mes/Mes.Cqrs.Handlers/MesEvents.cs`

## Summary

Extension methods that expose MES-specific structured-log event-ID groups.

## Methods

### Mes

_method_

```csharp
MesEntityEvents Mes(this IAvailableEntityEvents availableEvents)
```

Returns a scoped to the given entity-event base range.

### Mes

_method_

```csharp
MesEvents Mes(this IAvailableEvents availableEvents)
```

Returns the shared group from the available-events collection.

