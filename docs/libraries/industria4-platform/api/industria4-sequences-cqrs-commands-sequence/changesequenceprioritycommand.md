---
title: "ChangeSequencePriorityCommand"
---

# ChangeSequencePriorityCommand

_public class_

Namespace: `Industria4.Sequences.Cqrs.Commands.Sequence`

Source: `src/Sequences/Sequences.Cqrs/Commands/Sequence/ChangeSequencePriorityCommand.cs`

## Summary

Command to change the scheduling priorities of one or more sequences in a single operation.

## Constructors

### ChangeSequencePriorityCommand

_constructor_

```csharp
ChangeSequencePriorityCommand(ChangeSequencePriority[] priorities)
```

Initializes a new . The array of priority update items.

## Properties

### Priorities

_property_

```csharp
ChangeSequencePriority[] Priorities
```

Gets the list of sequence priority updates.

