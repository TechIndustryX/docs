---
title: "UpdateWorkOrderCommand"
---

# UpdateWorkOrderCommand

_public class_

Namespace: `Industria4.Mes.Cqrs.Commands.WorkOrder`

Source: `src/Mes/Mes.Cqrs/Commands/WorkOrder/UpdateWorkOrderCommand.cs`

## Summary

Command to update the details of an existing work order.

## Properties

### Customer

_property_

```csharp
string Customer
```

Gets the customer name for this work order.

### Descriptions

_property_

```csharp
LanguageDictionary<string> Descriptions
```

Gets the localised descriptions for this work order.

### DueDate

_property_

```csharp
DateTimeOffset? DueDate
```

Gets the optional deadline by which the work order must be completed.

### EntityVersion

_property_

```csharp
byte[] EntityVersion
```

Gets the concurrency token for optimistic locking.

### Group

_property_

```csharp
string Group
```

Gets the optional production group/line assignment.

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

### ReleaseDate

_property_

```csharp
DateTimeOffset? ReleaseDate
```

Gets the optional date/time when the work order is scheduled to be released.

### RequiredQuantity

_property_

```csharp
double RequiredQuantity
```

Gets the total quantity to be produced.

### StartingQuantity

_property_

```csharp
double? StartingQuantity
```

Gets the optional quantity at which production starts.

