---
title: "DataValue"
---

# DataValue

_public struct_

Namespace: `Industria4.DomainModel`

Source: `src/Shared/DomainModel/DataValue.cs`

## Summary

An immutable value type that encapsulates a typed scalar value as a raw byte array.

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

Gets the raw byte representation of the value, including the type discriminator byte.

### Type

_property_

```csharp
DataType Type
```

Gets the of this value.

### Value

_property_

```csharp
object Value
```

Gets the decoded CLR value.

## Methods

### ConvertType

_method_

```csharp
DataValue ConvertType(DataType targetType)
```

Converts this value to a different , using the registered converter. The desired target type. A new encoded in the target type.

### Create

_method_

```csharp
DataValue Create(DataType type,object value)
```

Creates a of the specified `type` from an arbitrary `value`. The target data type. The value to encode. A of the requested type.

### Create

_method_

```csharp
DataValue Create(object value)
```

Creates a by inferring the from the runtime type of `value`. The value to encode. Returns when `null`. A whose type matches the CLR type of the value.

### DataValue

_method_

```csharp
implicit operator DataValue(bool value)
```

Implicitly creates a from a value. The value to wrap.

### DataValue

_method_

```csharp
implicit operator DataValue(byte value)
```

Implicitly creates a from a value. The value to wrap.

### DataValue

_method_

```csharp
implicit operator DataValue(DateTime value)
```

Implicitly creates a from a value. The value to wrap.

### DataValue

_method_

```csharp
implicit operator DataValue(decimal value)
```

Implicitly creates a from a value. The value to wrap.

### DataValue

_method_

```csharp
implicit operator DataValue(double value)
```

Implicitly creates a from a value. The value to wrap.

### DataValue

_method_

```csharp
implicit operator DataValue(float value)
```

Implicitly creates a from a value. The value to wrap.

### DataValue

_method_

```csharp
implicit operator DataValue(int value)
```

Implicitly creates a from an value. The value to wrap.

### DataValue

_method_

```csharp
implicit operator DataValue(long value)
```

Implicitly creates a from a value. The value to wrap.

### DataValue

_method_

```csharp
implicit operator DataValue(short value)
```

Implicitly creates a from a value. The value to wrap.

### DataValue

_method_

```csharp
implicit operator DataValue(string value)
```

Implicitly creates a from a value. The value to wrap.

### DataValue

_method_

```csharp
implicit operator DataValue(uint value)
```

Implicitly creates a from a value. The value to wrap.

### DataValue

_method_

```csharp
implicit operator DataValue(ulong value)
```

Implicitly creates a from a value. The value to wrap.

### DataValue

_method_

```csharp
implicit operator DataValue(ushort value)
```

Implicitly creates a from a value. The value to wrap.

### Equals

_method_

```csharp
bool Equals(DataValue other)
```

### Equals

_method_

```csharp
bool Equals(object obj)
```

### FromBytes

_method_

```csharp
DataValue FromBytes(byte[] value)
```

Creates a from a raw byte array previously produced by . The raw byte array. Must not be `null`. A backed by the provided bytes.

### GetDefault

_method_

```csharp
DataValue GetDefault(DataType type)
```

Returns a default for the given `type`. The data type whose default value is requested.

### GetHashCode

_method_

```csharp
int GetHashCode()
```

### ToArray

_method_

```csharp
DataArrayValue ToArray()
```

Wraps this scalar value in a single-element . A containing this value as its only element.

