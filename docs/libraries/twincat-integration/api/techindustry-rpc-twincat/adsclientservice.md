---
title: "AdsClientService"
---

# AdsClientService

_public class_

Namespace: `TechIndustry.Rpc.TwinCAT`

Source: `TechIndustry.Rpc.TwinCAT/TechIndustry.Rpc.TwinCAT/AdsClientService.cs`

## Summary

Background service that maintains a persistent ADS connection to a TwinCAT PLC and implements to create RPC request/invoke objects. Reconnects automatically after connection loss or when TwinCAT leaves run state.

## Properties

### Client

_property_

```csharp
AdsClient Client
```

Gets the shared managed by this service.

## Methods

### CreateInvoke

_method_

```csharp
Invoke CreateInvoke(string symbol)
```

### CreateInvoke

_method_

```csharp
Invoke<T> CreateInvoke<T>(string symbol)
```

### CreateRequest

_method_

```csharp
Request<T> CreateRequest<T>(string symbol)
```

### CreateRequestReply

_method_

```csharp
RequestReply<T> CreateRequestReply<T>(string symbol)
```

### ExecuteAsync

_method_

```csharp
Task ExecuteAsync(CancellationToken stoppingToken)
```

