---
title: "WorkOrder"
---

# WorkOrder

_public class_

Namespace: `Industria4.Mes.DomainModel.WorkOrder`

Source: `src/Mes/Mes.DomainModel/WorkOrder/WorkOrder.cs`

## Summary

Aggregate root representing a manufacturing work order.

## Constructors

### WorkOrder

_constructor_

```csharp
WorkOrder(string id,string orderNumber,double requiredQuantity)
```

Initializes a new work order with a unique ID, order number, and required quantity. The unique identifier (max 36 chars). The external order reference number. The total quantity to be produced.

## Properties

### Descriptions

_property_

```csharp
LanguageDictionary<string> Descriptions
```

Gets the localised descriptions for this work order, keyed by language.

### Id

_property_

```csharp
string Id
```

### Metadata

_property_

```csharp
MetadataDictionary Metadata
```

Gets the arbitrary metadata for this work order (lazily initialised).

### OrderNumber

_property_

```csharp
string OrderNumber
```

Gets the order number (external reference).

### Priority

_property_

```csharp
int Priority
```

Gets or sets the scheduling priority.

### State

_property_

```csharp
WorkOrderState State
```

Gets or sets the current lifecycle state.

## Methods

### EvaluateCanChange

_method_

```csharp
bool EvaluateCanChange(WorkOrderState state)
```

Determines whether the work order may transition to the specified `state`. The target state to evaluate. `true` if the transition is permitted; otherwise `false`.

