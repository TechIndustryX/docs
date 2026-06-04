---
title: "ChangeWorkOrderPriority"
---

# ChangeWorkOrderPriority

_public class_

Namespace: `Industria4.Mes.Cqrs.Commands.WorkOrder`

Source: `src/Mes/Mes.Cqrs/Commands/WorkOrder/ChangeWorkOrderPriorityCommand.cs`

## Summary

Represents a single work-order priority change item within a .

## Constructors

### ChangeWorkOrderPriority

_constructor_

```csharp
ChangeWorkOrderPriority(string id,int priority,byte[] entityVersion)
```

Initializes a new priority change item. The work-order identifier. The new priority value. The concurrency token for optimistic locking.

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

Gets the work-order identifier.

### Priority

_property_

```csharp
int Priority
```

Gets the new priority value.

