---
title: "Invoke"
---

# Invoke

_public class_

Namespace: `TechIndustry.Rpc.TwinCAT`

Source: `TechIndustry.Rpc.TwinCAT/TechIndustry.Rpc.TwinCAT/Invoke.cs`

## Summary

Untyped TwinCAT PLC invoke subscription that raises when the PLC triggers the function block.

## Constructors

### Invoke

_constructor_

```csharp
Invoke(ILogger logger,AdsClient client,string symbol)
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
Task OnInvoked()
```

## Events

### Invoked

_event_

```csharp
event AsyncEventHandler<EventArgs>? Invoked
```

Raised each time the PLC triggers the function block.

