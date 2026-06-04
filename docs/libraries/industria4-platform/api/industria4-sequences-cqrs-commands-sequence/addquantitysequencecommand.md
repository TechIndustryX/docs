---
title: "AddQuantitySequenceCommand"
---

# AddQuantitySequenceCommand

_public class_

Namespace: `Industria4.Sequences.Cqrs.Commands.Sequence`

Source: `src/Sequences/Sequences.Cqrs/Commands/Sequence/AddQuantitySequenceCommand.cs`

## Summary

Command to add a produced quantity increment to a sequence.

## Constructors

### AddQuantitySequenceCommand

_constructor_

```csharp
AddQuantitySequenceCommand(string id,double quantity,MetadataDictionary metadata,byte[] entityVersion)
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

Gets the metadata to attach to this quantity update.

### Quantity

_property_

```csharp
double Quantity
```

Gets the quantity increment to add.

