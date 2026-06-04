---
title: "SchedulerHostedService"
---

# SchedulerHostedService

_public class_

Namespace: `Industria4.Mes.Cqrs.Handlers`

Source: `src/Mes/Mes.Cqrs.Handlers/SchedulerHostedService.cs`

## Summary

Background service that dispatches scheduled and messages at configurable intervals.

## Constructors

### SchedulerHostedService

_constructor_

```csharp
SchedulerHostedService(IServiceProvider serviceProvider,IOptions<MesOptions> mesSchedulerOptions,ILogger<SchedulerHostedService> logger)
```

Initializes a new .

## Methods

### StartAsync

_method_

```csharp
Task StartAsync(CancellationToken cancellationToken)
```

### StopAsync

_method_

```csharp
Task StopAsync(CancellationToken cancellationToken)
```

