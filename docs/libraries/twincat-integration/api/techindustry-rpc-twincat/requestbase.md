---
title: "RequestBase"
---

# RequestBase

_public class_

Namespace: `TechIndustry.Rpc.TwinCAT`

Source: `TechIndustry.Rpc.TwinCAT/TechIndustry.Rpc.TwinCAT/RequestBase.cs`

## Summary

Base class for TwinCAT RPC request types. Manages the handshake protocol with `bCanExecute` / `bExecuted` PLC symbols and handles ADS reconnect on symbol-version changes.

## Constructors

### RequestBase

_constructor_

```csharp
RequestBase(ILogger logger,AdsClient client,string symbol)
```

Initializes the base request with the ADS client and the fully-qualified PLC symbol path. Logger for diagnostic output. The connected ADS client. Fully-qualified symbol path of the PLC function block.

## Properties

### Client

_property_

```csharp
AdsClient Client
```

Gets the ADS client used by this request.

### Symbol

_property_

```csharp
string Symbol
```

Gets the fully-qualified PLC symbol path of this request's function block.

## Methods

### ExecuteAsync

_method_

```csharp
Task ExecuteAsync(object? state,CancellationToken token)
```

### InvokeInternalAsync

_method_

```csharp
Task InvokeInternalAsync(object? state,CancellationToken token = default)
```

### OnCanExecuteAsync

_method_

```csharp
Task OnCanExecuteAsync(object? state,CancellationToken token)
```

### SafeCallAsync

_method_

```csharp
Task SafeCallAsync(Func<Task> func,CancellationToken token)
```

### SafeCallAsync

_method_

```csharp
Task<T> SafeCallAsync<T>(Func<Task<T>> func,CancellationToken token)
```

### WaitExecuteAsync

_method_

```csharp
Task WaitExecuteAsync(CancellationToken token)
```

