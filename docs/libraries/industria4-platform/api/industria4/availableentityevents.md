---
title: "AvailableEntityEvents<T>"
---

# AvailableEntityEvents&lt;T&gt;

_public class_

Namespace: `Industria4`

Source: `src/Shared/Cqrs/AvailableEntityEvents.cs`

## Summary

Default implementation of

## Constructors

### AvailableEntityEvents

_constructor_

```csharp
AvailableEntityEvents(int baseId)
```

Initializes a new instance with the given base event ID. The base integer from which entity event IDs are derived.

## Properties

### BaseId

_property_

```csharp
int BaseId
```

Gets the base log-event ID from which entity-specific event offsets are calculated.

