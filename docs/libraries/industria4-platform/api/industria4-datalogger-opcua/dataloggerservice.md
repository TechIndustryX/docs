---
title: "DataLoggerService"
---

# DataLoggerService

_public class_

Namespace: `Industria4.DataLogger.OpcUa`

Source: `src/DataLogger/DataLogger.OpcUa/DataLoggerService.cs`

## Summary

Background service that reads OPC UA nodes and writes measurement data to InfluxDB.

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

