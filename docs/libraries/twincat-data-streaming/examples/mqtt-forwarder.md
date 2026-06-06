---
title: MQTT Forwarder
---

# MQTT Forwarder

## Scenario

Forward selected TwinCAT symbol values to simpler MQTT topics that dashboards, cloud functions or plant services can consume.

## Configuration

```json title="appsettings.json"
{
  "MqttForwarders": {
    "Press01ToPlantBroker": {
      "Reader": "Press01",
      "Broker": "PlantBroker",
      "Items": [
        {
          "Symbol": "MAIN.fbPress.fTemperature",
          "Topic": "line-a/press-01/temperature",
          "Retain": true
        },
        {
          "Symbol": "MAIN.fbPress.bRunning",
          "Topic": "line-a/press-01/running",
          "Retain": true
        }
      ]
    }
  }
}
```

## Complete Host

```csharp title="Program.cs"
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Serilog;
using TechIndustry.Streaming.TwinCAT;

var app = Host.CreateApplicationBuilder(args);

app.Services.Configure<MqttBrokerOptions>(app.Configuration.GetSection("MqttBrokers"));
app.Services.Configure<MqttSymbolsReaderOptions>(app.Configuration.GetSection("MqttSymbolReaders"));
app.Services.Configure<MqttForwarderOptions>(app.Configuration.GetSection("MqttForwarders"));
app.Services.AddHostedService<StreamingService>();

await app.Build().RunAsync();
```

## Step By Step

1. Define one symbol reader for the source stream.
2. Define one broker target.
3. Map each source symbol to an output MQTT topic.
4. Enable retained messages for dashboard-friendly current values.
5. Run `StreamingService`.
6. Subscribe to the output topics from another client.

## Validation

```bash
mosquitto_sub -h mqtt.example.local -t 'line-a/press-01/#' -v
```

You should see one message per mapped symbol as the TwinCAT stream updates.
