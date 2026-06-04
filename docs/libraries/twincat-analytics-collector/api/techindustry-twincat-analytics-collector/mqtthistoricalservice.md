---
title: "MqttHistoricalService"
---

# MqttHistoricalService

_public class_

Namespace: `TechIndustry.TwinCAT.Analytics.Collector`

Source: `TechIndustry.TwinCAT.Analytics.Collector/MqttHistoricalService.cs`

## Summary

that connects to an MQTT broker, subscribes to TwinCAT Analytics stream topics, and dispatches historical data downloads to configured storage backends.

## Methods

### DeleteStreamAsync

_method_

```csharp
Task DeleteStreamAsync(HistoricalStream historicalStream,IEnumerable<int> recordIds)
```

### StartAsync

_method_

```csharp
Task StartAsync(CancellationToken cancellationToken)
```

Connects to the MQTT broker and begins processing incoming stream messages.

### StopAsync

_method_

```csharp
Task StopAsync(CancellationToken cancellationToken)
```

Disconnects from the MQTT broker and disposes the client.

### TryGetIsRecording

_method_

```csharp
bool? TryGetIsRecording(int recordId)
```

Returns whether `recordId` is currently being recorded, or if the recording state is not yet known.

