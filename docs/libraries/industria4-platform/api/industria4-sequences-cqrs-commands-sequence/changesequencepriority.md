---
title: "ChangeSequencePriority"
---

# ChangeSequencePriority

_public class_

Namespace: `Industria4.Sequences.Cqrs.Commands.Sequence`

Source: `src/Sequences/Sequences.Cqrs/Commands/Sequence/ChangeSequencePriorityCommand.cs`

## Summary

Represents a single sequence priority change item within a .

## Constructors

### ChangeSequencePriority

_constructor_

```csharp
ChangeSequencePriority(string id,int priority,byte[] entityVersion)
```

Initializes a new priority change item. The sequence identifier. The new priority value. The concurrency token for optimistic locking.

## Properties

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

Gets the sequence identifier.

### Priority

_property_

```csharp
int Priority
```

Gets the new priority value.

