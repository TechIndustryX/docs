---
title: "WorkOrderRead"
---

# WorkOrderRead

_public class_

Namespace: `Industria4.Mes.ReadModel`

Source: `src/Mes/Mes.ReadModel/WorkOrderRead.cs`

## Summary

Read model representing a work order as returned by the MES query stack.

## Properties

### Customer

_property_

```csharp
string Customer
```

Gets or sets the customer name associated with this work order.

### Description

_property_

```csharp
string Description
```

Gets or sets the default-language description of the work order.

### DoneQuantity

_property_

```csharp
double DoneQuantity
```

Gets or sets the quantity that has been produced so far.

### DueDate

_property_

```csharp
DateTimeOffset? DueDate
```

Gets or sets the deadline by which the work order must be completed.

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

Gets or sets the production group/line assignment.

### Id

_property_

```csharp
string Id
```

Gets or sets the unique work-order identifier.

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

### OrderNumber

_property_

```csharp
string OrderNumber
```

Gets or sets the external order reference number.

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

Gets or sets the date/time when the work order is scheduled to be released.

### RequiredQuantity

_property_

```csharp
double RequiredQuantity
```

Gets or sets the total quantity to be produced.

### StartingQuantity

_property_

```csharp
double? StartingQuantity
```

Gets or sets the optional quantity at which production started.

### State

_property_

```csharp
WorkOrderState State
```

Gets or sets the current lifecycle state.

### WasteQuantity

_property_

```csharp
double WasteQuantity
```

Gets or sets the waste quantity reported so far.

