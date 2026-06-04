---
title: "LogAnalyticsCollector"
---

# LogAnalyticsCollector

_public class_

Namespace: `Azure.Monitor.Collector`

Source: `Azure.Monitor.Collector/LogAnalyticsCollector.cs`

## Summary

Sends JSON metric batches to Azure Monitor Log Analytics using the legacy HTTP Data Collector API (2016-04-01), signing each request with the configured workspace key.

## Methods

### SendMetricsAsync

_method_

```csharp
Task SendMetricsAsync(string logType,IReadOnlyList<JsonElement> metrics,string? timeGeneratedField = null,CancellationToken token = default)
```

Serializes `metrics` and uploads them to the Log Analytics workspace under the given `logType` table. The custom log table name in Log Analytics (without the `_CL` suffix). The JSON metric objects to ingest. Optional field name in the payload that represents the event timestamp. Token to cancel the operation.

