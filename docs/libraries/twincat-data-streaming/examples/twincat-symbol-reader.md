---
title: TwinCAT Symbol Reader
---

# TwinCAT Symbol Reader

## Scenario

Read live samples from a TwinCAT Analytics MQTT stream and consume them as .NET channel messages.

## Configuration

```json title="appsettings.json"
{
  "MqttBrokers": {
    "PlantBroker": {
      "Host": "mqtt.example.local",
      "Port": 1883
    }
  },
  "MqttSymbolReaders": {
    "Press01": {
      "MqttBroker": "PlantBroker",
      "Topic": "analytics/press-01",
      "SymbolTimeout": "00:00:10",
      "DataTimeout": "00:00:10",
      "MinSortQueueSize": 10,
      "MaxSortQueueSize": 1000,
      "Symbols": [
        "MAIN.fbPress.fTemperature",
        "MAIN.fbPress.bRunning"
      ]
    }
  }
}
```

## Complete Example

```csharp title="SymbolReaderWorker.cs"
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using TechIndustry.Streaming.TwinCAT;

public sealed class SymbolReaderWorker(
    MqttSymbolsReaderConfiguration configuration,
    ILogger<MqttSymbolsReader> readerLogger,
    ILogger<SymbolReaderWorker> logger) : BackgroundService
{
    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        using var reader = new MqttSymbolsReader(configuration, readerLogger);
        reader.Start();

        await foreach (var sample in reader.Reader.ReadAllAsync(stoppingToken))
        {
            logger.LogInformation(
                "{Timestamp} {Symbol} = {Value}",
                sample.Timestamp,
                sample.Symbol.InstancePath,
                sample.Value);
        }
    }
}
```

## Step By Step

1. Configure the MQTT broker.
2. Configure a reader with topic and symbol list.
3. Start `MqttSymbolsReader`.
4. Read values from `reader.Reader`.
5. Convert values to the target representation.
6. Stop and dispose the reader with the host.

## Validation

Publish a TwinCAT Analytics stream and confirm that each configured symbol appears in the worker logs with a timestamp and value.
