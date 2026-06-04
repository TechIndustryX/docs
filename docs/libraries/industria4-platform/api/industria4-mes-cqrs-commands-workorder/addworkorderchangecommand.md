---
title: "AddWorkOrderChangeCommand"
---

# AddWorkOrderChangeCommand

_public class_

Namespace: `Industria4.Mes.Cqrs.Commands.WorkOrder`

Source: `src/Mes/Mes.Cqrs/Commands/WorkOrder/AddWorkOrderChangeCommand.cs`

## Summary

Command to record a change (state or quantity event) on a work order without altering quantities.

## Constructors

### AddWorkOrderChangeCommand

_constructor_

```csharp
AddWorkOrderChangeCommand(string id,MetadataDictionary metadata,byte[] entityVersion)
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

Gets the metadata to attach to this change record.

