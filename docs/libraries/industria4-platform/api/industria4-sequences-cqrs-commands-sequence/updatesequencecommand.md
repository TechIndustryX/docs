---
title: "UpdateSequenceCommand"
---

# UpdateSequenceCommand

_public class_

Namespace: `Industria4.Sequences.Cqrs.Commands.Sequence`

Source: `src/Sequences/Sequences.Cqrs/Commands/Sequence/UpdateSequenceCommand.cs`

## Summary

Command to update the details of an existing sequence.

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

Gets the metadata to attach to this update.

### Priority

_property_

```csharp
int Priority
```

Gets or sets the scheduling priority.

### RecipeId

_property_

```csharp
string RecipeId
```

Gets the identifier of the recipe to execute.

### RequiredQuantity

_property_

```csharp
double RequiredQuantity
```

Gets the total quantity to produce in this sequence.

