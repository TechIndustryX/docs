---
title: "Invoke<T>"
---

# Invoke&lt;T&gt;

_public class_

Namespace: `TechIndustry.Rpc.TwinCAT`

Source: `TechIndustry.Rpc.TwinCAT/TechIndustry.Rpc.TwinCAT/Invoke.cs`

## Summary

Typed TwinCAT PLC invoke subscription that reads a parameter value from the PLC and raises with it when the PLC triggers the function block. Only primitive types are supported as the parameter type `T`. The primitive parameter type read from the PLC symbol `nParameter`.

## Constructors

### Invoke

_constructor_

```csharp
Invoke(ILogger<Invoke<T>> logger,AdsClient client,string symbol)
```

Initializes a new bound to `symbol` on `client`.

## Methods

### OnInvocationAsync

_method_

```csharp
Task OnInvocationAsync()
```

### OnInvoked

_method_

```csharp
Task OnInvoked(T? args)
```

## Events

### Invoked

_event_

```csharp
event AsyncEventHandler<T?>? Invoked
```

Raised each time the PLC triggers the function block, with the current parameter value.

