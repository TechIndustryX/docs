---
title: "AddWorkOrderCommand"
---

# AddWorkOrderCommand

_public class_

Namespace: `Industria4.Mes.Cqrs.Commands.WorkOrder`

Source: `src/Mes/Mes.Cqrs/Commands/WorkOrder/AddWorkOrderCommand.cs`

## Summary

Command to create a new work order.

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

Gets the localised descriptions for the new work order (language-keyed dictionary).

### DueDate

_property_

```csharp
DateTimeOffset? DueDate
```

Gets the optional deadline by which the work order must be completed.

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

Gets the additional metadata key-value pairs for the new work order.

### OrderNumber

_property_

```csharp
string OrderNumber
```

Gets the external order reference number.

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

