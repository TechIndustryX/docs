---
title: "ProductionEvents"
---

# ProductionEvents

_public class_

Namespace: `Industria4`

Source: `src/Production/Production.Cqrs.Handlers/ProductionEvents.cs`

## Summary

Well-known event IDs for the Production bounded context.

## Properties

### Composition

_property_

```csharp
IAvailableEntityEvents<CompositionType> Composition
```

Gets the event-ID group for events.

### Deployment

_property_

```csharp
IAvailableEntityEvents<DeploymentType> Deployment
```

Gets the event-ID group for events.

