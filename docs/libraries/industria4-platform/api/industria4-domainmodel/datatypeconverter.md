---
title: "DataTypeConverter"
---

# DataTypeConverter

_public class_

Namespace: `Industria4.DomainModel`

Source: `src/Shared/DomainModel/DataTypeConverter.cs`

## Summary

Utility which converts data types or parses runtime types

## Properties

### DataType

_property_

```csharp
DataType DataType
```

Gets the which the current instance can handle

### DefaultValue

_property_

```csharp
object DefaultValue
```

Gets the default value for current

### RuntimeType

_property_

```csharp
Type RuntimeType
```

Gets the which the current instance can handle

## Methods

### ConvertFromBytes

_method_

```csharp
int ConvertFromBytes(DataType type,byte[] value,int offset,out object result)
```

Converts the binary value to the runtime value

### ConvertFromBytes

_method_

```csharp
object ConvertFromBytes(byte[] value)
```

Converts the binary value to the runtime value

### ConvertFromBytesToArray

_method_

```csharp
object[] ConvertFromBytesToArray(byte[] value)
```

Converts the binary value to the runtime value

### ConvertToBytes

_method_

```csharp
byte[] ConvertToBytes(object value)
```

Converts the runtime value to binary

### ConvertToBytes

_method_

```csharp
byte[] ConvertToBytes(object[] value)
```

Converts the runtime value to binary

### ConvertValue

_method_

```csharp
object ConvertValue(object rawValue,object defaultValue)
```

Converts a runtime value to the correct runtime value for current Default value to use if raw value is null

### ConvertValue

_method_

```csharp
object ConvertValue(object rawValue)
```

Converts a runtime value to the correct runtime value for current

### Get

_method_

```csharp
DataTypeConverter Get(DataType dataType)
```

Gets a converter for the specified

### TryConvertValue

_method_

```csharp
object TryConvertValue(object rawValue,object defaultValue)
```

Converts a runtime value to the correct runtime value for current and return default value if cannot be converted

