---
title: "ChangeWorkOrderPriorityCommand"
---

# ChangeWorkOrderPriorityCommand

_public class_

Namespace: `Industria4.Mes.Cqrs.Commands.WorkOrder`

Source: `src/Mes/Mes.Cqrs/Commands/WorkOrder/ChangeWorkOrderPriorityCommand.cs`

## Summary

Command to change the scheduling priorities of one or more work orders in a single operation.

## Constructors

### ChangeWorkOrderPriorityCommand

_constructor_

```csharp
ChangeWorkOrderPriorityCommand(ChangeWorkOrderPriority[] priorities)
```

Initializes a new . The array of priority update items.

## Properties

### Priorities

_property_

```csharp
ChangeWorkOrderPriority[] Priorities
```

Gets the list of work-order priority updates.

