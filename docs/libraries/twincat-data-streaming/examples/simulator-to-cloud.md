---
title: Simulator to Cloud
---

# Simulator to Cloud

## Scenario

Validate the cloud ingestion path without connecting to a TwinCAT runtime.

## Source Pattern

`TechIndustry.Streaming.Simulator` generates synthetic machine temperature values and sends batches to the cloud path. Use placeholders for tenant, client and resource identifiers.

## Steps

1. Replace all cloud identifiers and credentials with local configuration or managed identity.
2. Produce a small batch of synthetic machine values.
3. Send the batch to Event Hub or HTTP ingestion.
4. Confirm Log Analytics receives rows.
5. Confirm the dashboard can query or display the data.

## Expected Result

The cloud and UI path can be validated before machine connectivity is available.
