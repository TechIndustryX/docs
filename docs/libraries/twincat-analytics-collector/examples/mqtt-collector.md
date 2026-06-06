---
title: MQTT Collector
---

# MQTT Collector

## Scenario

Run the collector as a hosted service that subscribes to TwinCAT Analytics historical MQTT topics and download command replies.

## Configuration

```json title="appsettings.json"
{
  "Storage": "Parquet",
  "Mqtt": {
    "Server": "mqtt.example.local",
    "Port": 1883,
    "ClientId": "historical-collector-line-a",
    "MainTopic": "Analytics",
    "DownloadTopic": "AnalyticsDownloads",
    "UseTls": false
  },
  "Parquet": {
    "Directory": "data/parquet"
  }
}
```

## Complete Host

```csharp title="Program.cs"
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using TechIndustry.TwinCAT.Analytics.Collector;
using TechIndustry.TwinCAT.Analytics.Collector.Hsds;
using TechIndustry.TwinCAT.Analytics.Collector.Parquet;

var app = Host.CreateApplicationBuilder(args);

app.Services.AddSingleton<MqttHistoricalService>();
app.Services.AddHostedService(p => p.GetRequiredService<MqttHistoricalService>());

app.Services.AddOptions<MqttOptions>()
    .ValidateDataAnnotations()
    .ValidateOnStart();

app.Services.Configure<MqttOptions>(app.Configuration.GetSection("Mqtt"));
app.Services.Configure<ParquetOptions>(app.Configuration.GetSection("Parquet"));
app.Services.AddParquetStorage();

await app.Build().RunAsync();
```

## Step By Step

1. Configure MQTT broker, main topic and download topic.
2. Register `MqttHistoricalService` as singleton and hosted service.
3. Configure the chosen storage backend.
4. Start the host.
5. Watch logs for MQTT connection and subscriptions.
6. Confirm streams are discovered when TwinCAT Analytics publishes descriptors.

## Validation

Subscribe to the configured topics and confirm the collector logs:

- connection to MQTT server;
- subscription to main and download topics;
- discovered stream descriptors;
- storage write operations.
