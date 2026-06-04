---
title: "SequencesEventsExtensions"
---

# SequencesEventsExtensions

_public class_

Namespace: `Industria4`

Source: `src/Sequences/Sequences.Cqrs.Handlers/SequenceEvents.cs`

## Summary

Extension methods on and that expose Sequences event groups.

## Methods

### Sequences

_method_

```csharp
SequencesEntityEvents Sequences(this IAvailableEntityEvents availableEvents)
```

Returns a new scoped to the given entity events accessor. The entity-level available-events accessor. A new instance.

### Sequences

_method_

```csharp
SequencesEvents Sequences(this IAvailableEvents availableEvents)
```

Returns the shared instance for domain-level Sequences events. The available-events accessor. The singleton.

