---
title: Quickstart
---

# TwinCAT Analytics Collector Quickstart

Use TwinCAT Analytics Collector to collect machine data and forward it to analytics storage or streaming infrastructure.

## 1. Choose the runtime

Use the container image for deployment:

```bash
docker pull ghcr.io/techindustryx/twincat-analytics-collector:latest
```

## 2. Configure inputs and outputs

Prepare the collector configuration with:

- TwinCAT source or ADS route information;
- MQTT broker or ingestion endpoint;
- storage target, such as HSDS or Parquet;
- credentials from the deployment secret manager.

## 3. Run the collector

Mount the configuration file or provide environment variables according to the deployment standard:

```bash
docker run --rm \
  --name twincat-analytics-collector \
  -v "$PWD/appsettings.Production.json:/app/appsettings.Production.json:ro" \
  ghcr.io/techindustryx/twincat-analytics-collector:latest
```

## 4. Verify the first data flow

Start with one machine or a small tag set. Confirm that samples arrive at the configured broker or storage target before increasing scope.
