---
title: "AddQuantityWorkOrderCommand"
---

# AddQuantityWorkOrderCommand

_public class_

Namespace: `Industria4.Mes.Cqrs.Commands.WorkOrder`

Source: `src/Mes/Mes.Cqrs/Commands/WorkOrder/AddQuantityWorkOrderCommand.cs`

## Summary

Command to add a produced (or waste) quantity to a work order.

## Constructors

### AddQuantityWorkOrderCommand

_constructor_

```csharp
AddQuantityWorkOrderCommand(string id,double? quantity,bool? waste,bool? userChange,MetadataDictionary metadata,byte[] entityVersion)
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
double? Quantity
```

Gets the quantity being reported (may be `null` for a change-only record).

### UserChange

_property_

```csharp
bool? UserChange
```

Gets a value indicating whether this change was triggered by a user.

### Waste

_property_

```csharp
bool Waste
```

Gets a value indicating whether the quantity represents waste.

