---
title: "MesEntityEvents"
---

# MesEntityEvents

_public class_

Namespace: `Industria4`

Source: `src/Mes/Mes.Cqrs.Handlers/MesEvents.cs`

## Summary

MES-domain structured-log event IDs scoped to a specific entity event range.

## Constructors

### MesEntityEvents

_constructor_

```csharp
MesEntityEvents(IAvailableEntityEvents availableEntityEvents)
```

Initializes a new from an entity-event base range.

## Properties

### AnotherOrderRunning

_property_

```csharp
EventId AnotherOrderRunning
```

Event ID logged when a transition to `Running` is blocked because another work order is already running.

### BadState

_property_

```csharp
EventId BadState
```

Event ID logged when the work order is in an invalid state for the requested operation.

### ChangeConflict

_property_

```csharp
EventId ChangeConflict
```

Event ID logged when a state-transition conflict is detected (e.g. concurrency collision).

### RequiredQuantity

_property_

```csharp
EventId RequiredQuantity
```

Event ID logged when the done quantity is still below the required quantity and the order cannot be completed.

