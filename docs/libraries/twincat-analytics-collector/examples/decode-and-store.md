---
title: Decode and Store
---

# Decode and Store

## Scenario

Download historical records for a stream, decode the binary samples and pass them to the configured storage backend.

## Consumer Pattern

```csharp title="HistoricalDownloadWorker.cs"
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using TechIndustry.TwinCAT.Analytics;
using TechIndustry.TwinCAT.Analytics.Collector;

public sealed class HistoricalDownloadWorker(
    MqttHistoricalService collector,
    IRecordsStorage storage,
    ILogger<HistoricalDownloadWorker> logger) : BackgroundService
{
    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        await foreach (var stream in DiscoverStreamsAsync(stoppingToken))
        {
            var start = DateTimeOffset.UtcNow.AddHours(-1);
            var end = DateTimeOffset.UtcNow;

            await foreach (var samples in stream.GetDataAsync(start, end, 10_000, stoppingToken))
            {
                var result = await storage.StoreAsync(stream, samples, stoppingToken);
                logger.LogInformation("Stored {Count} records: {Result}", samples.Count(), result);
            }
        }
    }
}
```

## Step By Step

1. Wait until descriptors for a historical stream are available.
2. Select a time range and max sample count.
3. Send a historical download command.
4. Receive binary chunks on the download topic.
5. Decode chunks into `HistoricalStreamSample` batches.
6. Store each batch through `IRecordsStorage`.
7. Commit or mark the range as processed.

## Validation

Run a short time range first, for example the last five minutes. Confirm that the stored record count matches the downloaded sample count.

## Operational Advice

- Use bounded time ranges to make retries simple.
- Keep download topic unique per collector instance.
- Log stream topic, record ID and time range for troubleshooting.
