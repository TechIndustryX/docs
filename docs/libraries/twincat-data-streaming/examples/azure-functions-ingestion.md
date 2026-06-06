---
title: Azure Functions Ingestion
---

# Azure Functions Ingestion

## Scenario

Receive metrics through Azure Functions and send them to Log Analytics or Web PubSub.

## Source Pattern

`HttpToLogAnalytics`, `EventHubToLogAnalytics` and `HttpToPubMessage` receive JSON payloads, validate content type and route payloads to the relevant Azure service.

## Steps

1. Deploy the Azure Functions project with managed identity or configured credentials.
2. Configure Log Analytics options and Web PubSub endpoint.
3. Send metric arrays as JSON.
4. Use Event Hub ingestion for streaming batches.
5. Use HTTP ingestion for simple integration tests.

## Expected Result

The cloud boundary accepts telemetry and routes it to historical and realtime destinations.

