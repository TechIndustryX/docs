---
title: "SequenceQuantityAddedEvent"
---

# SequenceQuantityAddedEvent

_public class_

Namespace: `Industria4.Sequences.Cqrs.Events.Sequence`

Source: `src/Sequences/Sequences.Cqrs/Events/Sequence/SequenceQuantityAddedEvent.cs`

## Summary

Domain event raised when a quantity increment is added to a sequence.

## Constructors

### SequenceQuantityAddedEvent

_constructor_

```csharp
SequenceQuantityAddedEvent(string id,double quantity,MetadataDictionary metadata)
```

Initializes a new .

## Properties

### Metadata

_property_

```csharp
MetadataDictionary Metadata
```

Gets the metadata associated with this event.

### Quantity

_property_

```csharp
double Quantity
```

Gets the quantity that was added.

