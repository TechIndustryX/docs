---
title: MQTT Collector
---

# MQTT Collector

## Scenario

Connect to a TwinCAT Analytics MQTT broker and receive stream descriptions, symbol metadata, recordings and download responses.

## Source Pattern

`MqttHistoricalService.StartAsync` configures a managed MQTT client, subscribes to the main topic and the download topic, and processes incoming messages.

## Steps

1. Configure `Mqtt:Server`, `Mqtt:Port`, `Mqtt:MainTopic` and `Mqtt:DownloadTopic`.
2. Enable TLS and credentials only when required by the broker.
3. Start the collector host.
4. Confirm subscriptions to both main and download topics.
5. Watch logs for stream descriptions and recording status.

## Expected Result

The collector tracks available historical streams and is ready to download completed recordings.

