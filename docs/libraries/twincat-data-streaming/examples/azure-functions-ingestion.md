---
title: Azure Functions Ingestion
---

# Azure Functions Ingestion

## Scenario

Ingest telemetry into Azure Functions from HTTP or Event Hub and send it to Log Analytics.

## Input Shape

```json title="metric.json"
{
  "time": "2026-06-06T10:00:00Z",
  "stream": "line-a/press-01",
  "name": "temperature",
  "value": 42.4,
  "unit": "C"
}
```

## HTTP Ingestion

```csharp title="Function usage"
public sealed class TelemetryClient(HttpClient http)
{
    public async Task SendAsync(CancellationToken token)
    {
        var payload = new
        {
            time = DateTimeOffset.UtcNow,
            stream = "line-a/press-01",
            name = "temperature",
            value = 42.4,
            unit = "C"
        };

        using var response = await http.PostAsJsonAsync(
            "https://<function-app>.azurewebsites.net/api/HttpToLogAnalytics",
            payload,
            token);

        response.EnsureSuccessStatusCode();
    }
}
```

## Step By Step

1. Deploy the Azure Functions project.
2. Configure Log Analytics workspace settings in application settings.
3. Send HTTP telemetry to `HttpToLogAnalytics` for simple integrations.
4. Send batches to Event Hub for higher-throughput streams.
5. Use `EventHubToLogAnalytics` to persist Event Hub messages.
6. Query the workspace to validate ingestion.

## Validation Query

```kusto
TechIndustryTelemetry_CL
| where stream_s == "line-a/press-01"
| top 20 by TimeGenerated desc
```

## Security Notes

Use Function keys, managed identity or network restrictions depending on the deployment. Do not put workspace keys in client applications.
