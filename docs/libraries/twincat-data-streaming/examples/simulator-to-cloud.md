---
title: Simulator To Cloud
---

# Simulator To Cloud

## Scenario

Test the cloud ingestion path without a PLC or live TwinCAT runtime.

## Simulator Payload

```csharp title="Simulator.cs"
public sealed record MachineMetric(
    DateTimeOffset Time,
    string Stream,
    string Name,
    double Value,
    string Unit);

public static IEnumerable<MachineMetric> ProduceBatch()
{
    for (var i = 0; i < 100; i++)
    {
        yield return new MachineMetric(
            DateTimeOffset.UtcNow.AddSeconds(-i),
            "line-a/press-01",
            "temperature",
            40 + Math.Sin(i / 10.0) * 5,
            "C");
    }
}
```

```csharp title="SendBatch.cs"
using var http = new HttpClient();

foreach (var metric in ProduceBatch())
{
    using var response = await http.PostAsJsonAsync(
        "https://<function-app>.azurewebsites.net/api/HttpToLogAnalytics",
        metric);

    response.EnsureSuccessStatusCode();
}
```

## Step By Step

1. Create synthetic metrics with realistic stream and signal names.
2. Send them to the same ingestion endpoint used by production.
3. Query Log Analytics for the simulator stream.
4. Validate dashboard charts, units and time ranges.
5. Replace simulator input with real MQTT/Event Hub input when ready.

## Validation Query

```kusto
TechIndustryTelemetry_CL
| where stream_s == "line-a/press-01"
| summarize avg(value_d) by bin(TimeGenerated, 1m), name_s
```

## Safety Rule

Use a dedicated stream name or environment tag for simulator data so tests do not mix with production machine telemetry.
