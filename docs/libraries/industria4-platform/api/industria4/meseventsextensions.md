---
title: "MesEventsExtensions"
---

# MesEventsExtensions

_public class_

Namespace: `Industria4`

Source: `src/Identity/Identity.Cqrs.Handlers/IdentityEvents.cs`

## Summary

Extension methods for accessing Identity event collections from CQRS event providers.

## Methods

### Identity

_method_

```csharp
IdentityEntityEvents Identity(this IAvailableEntityEvents availableEvents)
```

Returns an wrapper for entity-scoped events. The available entity-events source. A new instance.

### Identity

_method_

```csharp
IdentityEvents Identity(this IAvailableEvents availableEvents)
```

Returns the singleton for available events. The available-events source. The shared instance.

