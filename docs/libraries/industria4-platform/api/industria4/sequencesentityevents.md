---
title: "SequencesEntityEvents"
---

# SequencesEntityEvents

_public class_

Namespace: `Industria4`

Source: `src/Sequences/Sequences.Cqrs.Handlers/SequenceEvents.cs`

## Summary

Provides entity-level event identifiers scoped to a specific Sequences entity.

## Constructors

### SequencesEntityEvents

_constructor_

```csharp
SequencesEntityEvents(IAvailableEntityEvents availableEntityEvents)
```

Initializes a new instance of . The entity-level events accessor to base identifiers on.

## Properties

### AnotherOrderRunning

_property_

```csharp
EventId AnotherOrderRunning
```

Gets the event identifier raised when another order is already running.

### BadState

_property_

```csharp
EventId BadState
```

Gets the event identifier raised when a sequence is in an invalid state.

### ChangeConflict

_property_

```csharp
EventId ChangeConflict
```

Gets the event identifier raised when a sequence change conflicts with another operation.

### RequiredQuantity

_property_

```csharp
EventId RequiredQuantity
```

Gets the event identifier raised when the required quantity condition is evaluated.

