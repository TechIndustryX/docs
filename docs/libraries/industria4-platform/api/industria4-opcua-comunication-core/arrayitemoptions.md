---
title: "ArrayItemOptions"
---

# ArrayItemOptions

_public class_

Namespace: `Industria4.OpcUa.Comunication.Core`

Source: `src/OpcUa/OpcUa.Comunication.Core/CoreOptions.cs`

## Summary

Configures the array-item rewriting rules applied to write operations.

## Properties

### LastNode

_property_

```csharp
string LastNode
```

Gets or sets the OPC-UA node that holds the last valid array index.

### LastNodeType

_property_

```csharp
DataType LastNodeType
```

Gets or sets the data type of the last-index node value.

### Node

_property_

```csharp
string Node
```

Gets or sets the generic node identifier pattern (may contain `[*]` wildcard).

### QuantityNode

_property_

```csharp
string QuantityNode
```

Gets or sets the OPC-UA node that holds the array-element quantity.

### QuantityNodeType

_property_

```csharp
DataType QuantityNodeType
```

Gets or sets the data type of the quantity node value.

### Shift

_property_

```csharp
int? Shift
```

Gets or sets the index offset applied to array indices during rewriting.

