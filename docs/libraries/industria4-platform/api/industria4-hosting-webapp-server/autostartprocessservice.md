---
title: "AutoStartProcessService"
---

# AutoStartProcessService

_public class_

Namespace: `Industria4.Hosting.WebApp.Server`

Source: `src/Hosting/Hosting.WebApp.Server/AutoStartProcessService.cs`

## Summary

An that launches an external process defined in when the application starts.

## Constructors

### AutoStartProcessService

_constructor_

```csharp
AutoStartProcessService(IHostApplicationLifetime lifetime,IOptions<HostingOptions> options,ILogger<AutoStartProcessService> logger)
```

Initializes a new instance of with the required services.

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

