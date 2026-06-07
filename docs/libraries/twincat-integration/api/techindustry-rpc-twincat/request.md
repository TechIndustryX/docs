---
title: "Request<T>"
---

# Request&lt;T&gt;

_public class_

Namespace: `TechIndustry.Rpc.TwinCAT`

Source: `TechIndustry.Rpc.TwinCAT/TechIndustry.Rpc.TwinCAT/Request.cs`

## Summary

Fire-and-forget TwinCAT RPC request that sends a typed argument to a PLC function block and waits for the `bExecuted` confirmation. Supports primitive types (sent directly), class types (serialized as JSON), and struct types (marshalled as binary). The type of the argument passed to the PLC function block.

## Constructors

### Request

_constructor_

```csharp
Request(ILogger<Request<T>> logger,AdsClient client,string symbol)
```

Initializes a new bound to the given ADS client and symbol.

## Methods

### InvokeAsync

_method_

```csharp
Task InvokeAsync(T arg,CancellationToken token = default)
```

Invokes the PLC function block with the specified argument and waits for execution to complete. The argument to pass to the PLC function block. Cancellation token.

### OnCanExecuteAsync

_method_

```csharp
Task OnCanExecuteAsync(object? state,CancellationToken token)
```

