---
title: Quickstart
---

# TwinCAT Data Streaming Quickstart

Use TwinCAT Data Streaming when TwinCAT machine data must be sent to cloud ingestion, dashboards or downstream consumers.

## 1. Configure the source

Prepare the TwinCAT runtime and ADS route for the machine or test PLC. Select the symbols or telemetry groups that should be streamed.

## 2. Configure the destination

Choose the target for the stream, such as MQTT, Azure ingestion or another broker. Store connection strings and credentials in the target secret manager.

## 3. Start the runtime component

Use the container image where container deployment is supported:

```bash
docker pull ghcr.io/techindustryx/twincat-data-streaming:latest
```

Run it with the environment-specific configuration:

```bash
docker run --rm \
  --name twincat-data-streaming \
  -v "$PWD/appsettings.Production.json:/app/appsettings.Production.json:ro" \
  ghcr.io/techindustryx/twincat-data-streaming:latest
```

## 4. Validate consumers

Open the dashboard or subscribe to the target topic and verify that values update with the expected timestamp, unit and machine context.
