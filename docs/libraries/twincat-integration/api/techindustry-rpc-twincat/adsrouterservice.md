---
title: "AdsRouterService"
---

# AdsRouterService

_public class_

Namespace: `TechIndustry.Rpc.TwinCAT`

Source: `TechIndustry.Rpc.TwinCAT/TechIndustry.Rpc.TwinCAT/AdsRouterService.cs`

## Summary

Background service that starts and supervises the AMS TCP/IP router, enabling ADS communication over TCP when a local TwinCAT installation is not available.

## Constructors

### AdsRouterService

_constructor_

```csharp
AdsRouterService(IServiceProvider serviceProvider,ILogger<AdsRouterService> logger)
```

Initializes a new with the required dependencies.

## Methods

### ExecuteAsync

_method_

```csharp
Task ExecuteAsync(CancellationToken stoppingToken)
```

