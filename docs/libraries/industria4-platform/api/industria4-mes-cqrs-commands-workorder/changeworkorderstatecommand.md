---
title: "ChangeWorkOrderStateCommand"
---

# ChangeWorkOrderStateCommand

_public class_

Namespace: `Industria4.Mes.Cqrs.Commands.WorkOrder`

Source: `src/Mes/Mes.Cqrs/Commands/WorkOrder/ChangeWorkOrderStateCommand.cs`

## Summary

Command to transition a work order to a new lifecycle state.

## Constructors

### ChangeWorkOrderStateCommand

_constructor_

```csharp
ChangeWorkOrderStateCommand(string id,WorkOrderState state,bool? userChange,MetadataDictionary metadata,byte[] entityVersion)
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
WorkOrderState State
```

Gets the new lifecycle state for the work order.

### UserChange

_property_

```csharp
bool? UserChange
```

Gets a value indicating whether the state change was triggered by a user.

