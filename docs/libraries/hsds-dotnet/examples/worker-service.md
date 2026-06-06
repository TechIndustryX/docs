---
title: Worker Service
---

# Worker Service

## Scenario

Run HSDS ingestion from a background service. This is useful when values arrive from MQTT, OPC UA, files or another industrial service and must be persisted continuously.

## Configuration

```json title="appsettings.json"
{
  "Hsds": {
    "Endpoint": "https://hsds.example.local/",
    "Username": "hsds-writer",
    "Password": "<set from secret store>",
    "Domain": "/home/line-a.h5",
    "Dataset": "FactoryA/Line01/Press01/status"
  }
}
```

## Complete Example

```csharp title="Program.cs"
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using TechIndustry.Hsds;

var builder = Host.CreateApplicationBuilder(args);
builder.Services.AddHsdsClient(new Uri(builder.Configuration["Hsds:Endpoint"]!));
builder.Services.AddHostedService<HsdsStatusWorker>();

await builder.Build().RunAsync();
```

```csharp title="HsdsStatusWorker.cs"
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using TechIndustry.Hsds;

public sealed class HsdsStatusWorker(
    IServiceProvider serviceProvider,
    IConfiguration configuration,
    ILogger<HsdsStatusWorker> logger) : BackgroundService
{
    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        using var scope = serviceProvider.CreateScope();
        var hsds = scope.ServiceProvider.GetRequiredService<SimpleHsdsClient>();

        hsds.Username = configuration["Hsds:Username"];
        hsds.Password = configuration["Hsds:Password"];
        hsds.Domain = configuration["Hsds:Domain"];

        await hsds.EnsureDomainAsync();

        var datasetPath = configuration["Hsds:Dataset"]!;
        var dataset = await hsds.EnsureDatasetAsync<int>(
            datasetPath,
            shape: [1],
            maxdims: [1],
            gzipCompressed: true);

        while (!stoppingToken.IsCancellationRequested)
        {
            var status = DateTimeOffset.UtcNow.Second % 2;
            await hsds.SetDatasetValuesAsync(dataset.Id, [status], 0..1);
            logger.LogInformation("Wrote status {Status} to {Dataset}", status, datasetPath);

            await Task.Delay(TimeSpan.FromSeconds(5), stoppingToken);
        }
    }
}
```

## Step By Step

1. Register `SimpleHsdsClient` once in the host.
2. Put endpoint, domain and dataset path in configuration.
3. Resolve the client inside the worker scope.
4. Ensure the domain and dataset at startup.
5. In the loop, write only the value range that changed.
6. Use cancellation tokens so the service stops cleanly.

## Validation

Read the dataset from a small console or health check:

```csharp
var dataset = await hsds.GetDatasetAsync("FactoryA/Line01/Press01/status");
var status = await hsds.GetDatasetValuesAsync<int>(dataset.Id, 0..1);
Console.WriteLine(status[0]);
```

## Production Notes

- Store the HSDS password in your deployment secret store.
- Add retries around transient HTTP failures.
- Log domain, dataset path and range, but not credentials.
- For high-frequency data, buffer values and write chunked arrays instead of one value at a time.
