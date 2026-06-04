---
title: "ValueParameterBase"
---

# ValueParameterBase

_public class_

Namespace: `Industria4.Recipes.DomainModel.Model`

Source: `src/Recipes/Recipes.DomainModel/Model/ValueParameterBase.cs`

## Summary

Abstract base for value-type model parameters, providing OPC-UA node IDs, an operation descriptor, and a default value.

## Properties

### Operation

_property_

```csharp
ParameterOperation Operation
```

Gets the operation configuration (data type, unit, format) for this parameter.

### SystemDefaultValue

_property_

```csharp
DataValue SystemDefaultValue
```

Gets the system-defined default value for this parameter type (implemented by subclasses).

