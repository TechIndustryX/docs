---
title: "SequenceRead"
---

# SequenceRead

_public class_

Namespace: `Industria4.Sequences.ReadModel`

Source: `src/Sequences/Sequences.ReadModel/SequenceRead.cs`

## Summary

Read model representing a sequence as returned by the Sequences query stack.

## Properties

### DoneQuantity

_property_

```csharp
double DoneQuantity
```

Gets or sets the cumulative quantity that has been produced.

### EntityVersion

_property_

```csharp
byte[] EntityVersion
```

Gets the concurrency token for optimistic locking.

### Id

_property_

```csharp
string Id
```

Gets or sets the unique sequence identifier.

### Metadata

_property_

```csharp
Dictionary<string,object> Metadata
```

Gets or sets the deserialized metadata dictionary.

### MetadataJson

_property_

```csharp
string MetadataJson
```

Gets or sets the raw JSON metadata string (not serialized to API responses).

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

Gets or sets the identifier of the recipe to execute.

### RequiredQuantity

_property_

```csharp
double RequiredQuantity
```

Gets or sets the total quantity to be produced.

### State

_property_

```csharp
SequenceState State
```

Gets or sets the current lifecycle state.

