---
title: "AddSequenceCommand"
---

# AddSequenceCommand

_public class_

Namespace: `Industria4.Sequences.Cqrs.Commands.Sequence`

Source: `src/Sequences/Sequences.Cqrs/Commands/Sequence/AddSequenceCommand.cs`

## Summary

Command to create a new production sequence.

## Properties

### Metadata

_property_

```csharp
MetadataDictionary Metadata
```

Gets the metadata to attach to this sequence.

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

