---
title: "LogAnalyticsService"
---

# LogAnalyticsService

_public class_

Namespace: `TechIndustry.Streaming.AzureFunctions.Services`

Source: `TechIndustry.Streaming.AzureFunctions/Services/LogAnalyticsService.cs`

## Summary

Provides query and ingestion operations against Azure Monitor Log Analytics using the Data Collection Rule (DCR) endpoint and the Log Analytics query API.

## Methods

### QueryAsync

_method_

```csharp
Task<LogsTable> QueryAsync(string query,CancellationToken token = default)
```

Executes a KQL `query` against the configured Log Analytics workspace and returns the result table. The KQL query string to execute. Token to cancel the operation.

### SendMetricsAsync

_method_

```csharp
Task SendMetricsAsync(IEnumerable<InputMetric> metrics,CancellationToken token = default)
```

Ingests `metrics` into Log Analytics, grouping them by stream name into separate tables. The metric payloads to ingest. Items with an empty `StreamName` are ignored. Token to cancel the operation.

