---
title: "ValueParameterBase"
---

# ValueParameterBase

_public class_

Namespace: `Industria4.Recipes.Cqrs.Commands.Model`

Source: `src/Recipes/Recipes.Cqrs/Commands/Model/Parameter.cs`

## Summary

Abstract base for value-type model parameter definitions with OPC-UA node IDs and a data type.

## Constructors

### ValueParameterBase

_constructor_

```csharp
ValueParameterBase(LanguageDictionary<string> descriptions,MetadataDictionary metadata,int sortIndex,int arraySize,DataType type,string unit,string format,string readNodeId,string writeNodeId,DataValue defaultValue)
```

Initializes a new value-parameter base with all fields.

## Properties

### DefaultValue

_property_

```csharp
DataValue DefaultValue
```

Gets the default value for this parameter.

### Format

_property_

```csharp
string Format
```

Gets the display format string.

### ReadNodeId

_property_

```csharp
string ReadNodeId
```

Gets the OPC-UA node ID used to read the parameter value.

### Type

_property_

```csharp
DataType Type
```

Gets the data type of this parameter.

### Unit

_property_

```csharp
string Unit
```

Gets the measurement unit label.

### WriteNodeId

_property_

```csharp
string WriteNodeId
```

Gets the OPC-UA node ID used to write the parameter value.

