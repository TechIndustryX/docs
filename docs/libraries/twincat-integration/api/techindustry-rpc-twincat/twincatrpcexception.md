---
title: "TwinCATRpcException"
---

# TwinCATRpcException

_public class_

Namespace: `TechIndustry.Rpc.TwinCAT`

Source: `TechIndustry.Rpc.TwinCAT/TechIndustry.Rpc.TwinCAT/TwinCATRpcException.cs`

## Summary

Exception thrown when a TwinCAT RPC call returns a non-zero error code or cannot be completed.

## Constructors

### TwinCATRpcException

_constructor_

```csharp
TwinCATRpcException()
```

Initializes a new with no message.

### TwinCATRpcException

_constructor_

```csharp
TwinCATRpcException(int error)
```

Initializes a new for a numeric TwinCAT error code. The TwinCAT error code.

### TwinCATRpcException

_constructor_

```csharp
TwinCATRpcException(string message,int error)
```

Initializes a new with both a message and a numeric error code. The error description. The TwinCAT error code.

### TwinCATRpcException

_constructor_

```csharp
TwinCATRpcException(string message)
```

Initializes a new with the specified message. The error description.

## Properties

### Error

_property_

```csharp
int? Error
```

Gets the ADS/TwinCAT error code, or when no numeric error code is available.

