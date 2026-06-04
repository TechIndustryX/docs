---
title: "Extensions"
---

# Extensions

_public class_

Namespace: `Google.Protobuf.WellKnownTypes`

Source: `src/Grpc/Extensions.cs`

## Summary

Extension methods for converting .NET objects to Protobuf Well-Known Types.

## Methods

### ToAny

_method_

```csharp
Any ToAny(this object obj)
```

Packs a .NET into a Protobuf . Supports , , , , , and . The value to pack. Thrown for unsupported types.

### ToObject

_method_

```csharp
object ToObject(this Any any)
```

Unpacks a Protobuf to its .NET value. Supports , , , , , and . The to unpack. Thrown when the packed type is not recognized.

### ToObject

_method_

```csharp
object ToObject(this Value any)
```

### ToValue

_method_

```csharp
Value ToValue(this object obj)
```

Converts a .NET to a Protobuf . Only is currently supported. The value to convert. Thrown for unsupported types.

