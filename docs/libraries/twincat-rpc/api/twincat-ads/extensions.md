---
title: "Extensions"
---

# Extensions

_public class_

Namespace: `TwinCAT.Ads`

Source: `TechIndustry.Rpc.TwinCAT/TechIndustry.Rpc.TwinCAT/Extensions.cs`

## Summary

Extension methods for marshalling ADS RPC method return values to .NET structures.

## Methods

### MarshalResultToStructure

_method_

```csharp
T MarshalResultToStructure<T>(this ResultRpcMethod result)
```

Unmarshals the byte-array return value of an ADS RPC method into a blittable struct of type `T`. The target value type. The RPC method result containing the raw byte array. The unmarshalled struct value, or `default` when the return value is not a byte array.

### MarshalToStructure

_method_

```csharp
T MarshalToStructure<T>(this byte[] bytes)
```

Unmarshals a raw byte array into a blittable struct of type `T` using unsafe pointer casting. The target value type. The byte array containing the raw struct data.

