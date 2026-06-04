---
title: "InvokeBase"
---

# InvokeBase

_public class_

Namespace: `TechIndustry.Rpc.TwinCAT`

Source: `TechIndustry.Rpc.TwinCAT/TechIndustry.Rpc.TwinCAT/Invoke.cs`

## Summary

Base class for TwinCAT PLC-initiated invoke subscriptions. Subscribes to the `bInvoking` symbol and calls whenever the PLC sets the symbol to .

## Constructors

### InvokeBase

_constructor_

```csharp
InvokeBase(ILogger logger,AdsClient client,string symbol)
```

## Properties

### Client

_property_

```csharp
AdsClient Client
```

Gets the ADS client used by this invoke instance.

### Logger

_property_

```csharp
ILogger Logger
```

Gets the logger used by this invoke instance.

### Symbol

_property_

```csharp
string Symbol
```

Gets the fully-qualified PLC symbol path of the invokable function block.

## Methods

### DisposeAsync

_method_

```csharp
ValueTask DisposeAsync()
```

Unsubscribes the ADS notification and releases the device notification handle.

### OnInvocationAsync

_method_

```csharp
Task OnInvocationAsync()
```

### Start

_method_

```csharp
void Start()
```

