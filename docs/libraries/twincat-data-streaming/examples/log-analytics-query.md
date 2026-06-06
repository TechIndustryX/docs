---
title: Log Analytics Query
---

# Log Analytics Query

## Scenario

Query telemetry written by the Azure Functions ingestion layer and return time-series data to an application or dashboard.

## Query Example

```kusto title="Last temperature values"
TechIndustryTelemetry_CL
| where stream_s == "line-a/press-01"
| where name_s == "temperature"
| project TimeGenerated, value_d, unit_s
| order by TimeGenerated desc
| take 100
```

## Complete Client Pattern

```csharp title="QueryClient.cs"
public sealed class TelemetryQueryClient(HttpClient http)
{
    public async Task<string> QueryAsync(CancellationToken token)
    {
        var request = new
        {
            query = """
                TechIndustryTelemetry_CL
                | where stream_s == "line-a/press-01"
                | where name_s == "temperature"
                | order by TimeGenerated desc
                | take 100
                """
        };

        using var response = await http.PostAsJsonAsync(
            "https://<function-app>.azurewebsites.net/api/LogAnalyticsQuery",
            request,
            token);

        response.EnsureSuccessStatusCode();
        return await response.Content.ReadAsStringAsync(token);
    }
}
```

## Step By Step

1. Decide the Kusto query used by the dashboard or service.
2. Keep time range and stream filters explicit.
3. Call the query function with a JSON body.
4. Parse the response into chart or table data.
5. Add paging or aggregation for long ranges.

## Validation

Run the same query in the Azure Portal first, then call it through the function. The result counts should match.
