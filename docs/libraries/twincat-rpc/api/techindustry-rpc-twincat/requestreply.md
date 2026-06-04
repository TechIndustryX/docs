---
title: "RequestReply<T>"
---

# RequestReply&lt;T&gt;

_public class_

Namespace: `TechIndustry.Rpc.TwinCAT`

Source: `TechIndustry.Rpc.TwinCAT/TechIndustry.Rpc.TwinCAT/RequestReply.cs`

## Summary

TwinCAT RPC request that invokes a PLC function block with no input argument and reads back a typed reply. Supports primitive types (read directly), class types (deserialized from JSON), and struct types (unmarshalled from binary). The type of the value returned by the PLC function block.

## Constructors

### RequestReply

_constructor_

```csharp
RequestReply(ILogger<RequestReply<T>> logger,AdsClient client,string symbol)
```

Initializes a new bound to the given ADS client and symbol.

## Methods

### InvokeAsync

_method_

```csharp
Task<T> InvokeAsync(CancellationToken token = default)
```

Invokes the PLC function block, waits for the reply to be ready, reads the result, and confirms execution. Cancellation token. The typed return value from the PLC function block.

### OnCanExecuteAsync

_method_

```csharp
Task OnCanExecuteAsync(object? state,CancellationToken token)
```

