---
title: "StreamingService"
---

# StreamingService

_public class_

Namespace: `TechIndustry.Streaming.TwinCAT`

Source: `TechIndustry.Streaming.TwinCAT/StreamingService.cs`

## Summary

Hosted service that creates and orchestrates all configured , , and instances based on application options.

## Methods

### StartAsync

_method_

```csharp
Task StartAsync(CancellationToken cancellationToken)
```

Builds brokers, readers, and forwarders, then starts each one in dependency order.

### StopAsync

_method_

```csharp
Task StopAsync(CancellationToken cancellationToken)
```

Stops all running readers and disposes all forwarder connections.

