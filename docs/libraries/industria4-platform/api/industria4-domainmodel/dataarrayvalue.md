---
title: "DataArrayValue"
---

# DataArrayValue

_public struct_

Namespace: `Industria4.DomainModel`

Source: `src/Shared/DomainModel/DataArrayValue.cs`

## Summary

An immutable value type that encapsulates a typed array of values as a raw byte array.

## Properties

### Converter

_property_

```csharp
DataTypeConverter Converter
```

Gets the that handles encoding/decoding for this value's type.

### RawValue

_property_

```csharp
byte[] RawValue
```

Gets the raw byte representation of the values, including the type discriminator byte.

### Type

_property_

```csharp
DataType Type
```

Gets the of this array value.

## Methods

### ConvertType

_method_

```csharp
DataArrayValue ConvertType(DataType targetType)
```

Converts all elements to a different . The desired target type. A new with all values converted to the target type.

### Create

_method_

```csharp
DataArrayValue Create(DataType type,object[] values)
```

Creates a of the specified `type` from an object array. The target data type. The values to encode. A new encoded in the requested type.

### FromBytes

_method_

```csharp
DataArrayValue FromBytes(byte[] value)
```

Creates a from a raw byte array previously produced by . The raw byte array. Must not be `null`. A backed by the provided bytes.

