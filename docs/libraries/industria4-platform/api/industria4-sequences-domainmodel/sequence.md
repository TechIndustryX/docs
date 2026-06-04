---
title: "Sequence"
---

# Sequence

_public class_

Namespace: `Industria4.Sequences.DomainModel`

Source: `src/Sequences/Sequences.DomainModel/Sequence.cs`

## Summary

Aggregate root representing a production sequence that tracks progress through required and completed quantities.

## Constructors

### Sequence

_constructor_

```csharp
Sequence(string id,double requiredQuantity)
```

Initializes a new sequence with the given ID and target quantity. The unique identifier. The total quantity to produce.

## Properties

### Id

_property_

```csharp
string Id
```

### Metadata

_property_

```csharp
MetadataDictionary Metadata
```

Gets the arbitrary metadata for this sequence (lazily initialised).

### Priority

_property_

```csharp
int Priority
```

Gets or sets the scheduling priority.

### State

_property_

```csharp
SequenceState State
```

Gets or sets the current lifecycle state.

## Methods

### EvaluateCanChange

_method_

```csharp
bool EvaluateCanChange(SequenceState state)
```

Determines whether the sequence may transition to the specified `state`. The target state to evaluate. `true` if the transition is permitted; otherwise `false`.

