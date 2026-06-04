---
title: "ChangeSequenceStateCommand"
---

# ChangeSequenceStateCommand

_public class_

Namespace: `Industria4.Sequences.Cqrs.Commands.Sequence`

Source: `src/Sequences/Sequences.Cqrs/Commands/Sequence/ChangeSequenceStateCommand.cs`

## Summary

Command to transition a sequence to a new lifecycle state.

## Constructors

### ChangeSequenceStateCommand

_constructor_

```csharp
ChangeSequenceStateCommand(string id,SequenceState state,MetadataDictionary metadata,byte[] entityVersion)
```

Initializes a new .

## Properties

### EntityVersion

_property_

```csharp
byte[] EntityVersion
```

Gets the concurrency token for optimistic locking.

### Metadata

_property_

```csharp
MetadataDictionary Metadata
```

Gets the metadata to attach to this state change.

### State

_property_

```csharp
SequenceState State
```

Gets the new lifecycle state for the sequence.

