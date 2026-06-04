---
title: "SequenceStateChangedEvent"
---

# SequenceStateChangedEvent

_public class_

Namespace: `Industria4.Sequences.Cqrs.Events.Sequence`

Source: `src/Sequences/Sequences.Cqrs/Events/Sequence/SequenceStateChangedEvent.cs`

## Summary

Domain event raised when the lifecycle state of a sequence changes.

## Constructors

### SequenceStateChangedEvent

_constructor_

```csharp
SequenceStateChangedEvent(string id,SequenceState state,MetadataDictionary metadata)
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
SequenceState State
```

Gets the new lifecycle state of the sequence.

