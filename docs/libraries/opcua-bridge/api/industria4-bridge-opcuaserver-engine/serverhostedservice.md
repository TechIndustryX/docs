---
title: "ServerHostedService"
---

# ServerHostedService

_public class_

Namespace: `Industria4.Bridge.OpcUaServer.Engine`

Source: `src/OpcUaServer/Engine/ServerHostedService.cs`

## Summary

Hosted service that initializes and starts the OPC UA server on application startup.

## Constructors

### ServerHostedService

_constructor_

```csharp
ServerHostedService(IServiceProvider serviceProvider,ILogger<ServerHostedService> logger)
```

Initializes a new with the required dependencies.

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

