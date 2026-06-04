---
title: "SetQuantityWorkOrderCommand"
---

# SetQuantityWorkOrderCommand

_public class_

Namespace: `Industria4.Mes.Cqrs.Commands.WorkOrder`

Source: `src/Mes/Mes.Cqrs/Commands/WorkOrder/SetQuantityWorkOrderCommand.cs`

## Summary

Command to set (overwrite) the produced or waste quantity of a work order.

## Constructors

### SetQuantityWorkOrderCommand

_constructor_

```csharp
SetQuantityWorkOrderCommand(string id,double quantity,bool waste,bool? userChange,MetadataDictionary metadata,byte[] entityVersion)
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

Gets the absolute quantity to set.

### UserChange

_property_

```csharp
bool? UserChange
```

Gets a value indicating whether the change was triggered by a user.

### Waste

_property_

```csharp
bool Waste
```

Gets a value indicating whether the quantity represents waste.

