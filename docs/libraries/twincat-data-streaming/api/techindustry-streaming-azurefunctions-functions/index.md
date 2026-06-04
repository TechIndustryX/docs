---
title: "TechIndustry.Streaming.AzureFunctions.Functions"
---

# TechIndustry.Streaming.AzureFunctions.Functions

This namespace contains 4 public API types.

## Types

- [EventHubToLogAnalytics](./eventhubtologanalytics.md) _class_ - Azure Function that receives Event Hub batches from a TwinCAT data stream and forwards them to Log Analytics.
- [HttpToLogAnalytics](./httptologanalytics.md) _class_ - Azure Function that accepts an HTTP POST of metric data and forwards it to Log Analytics.
- [HttpToPubMessage](./httptopubmessage.md) _class_ - Azure Function that acts as an HTTP gateway to Azure Web PubSub: GET returns a client-access URI; POST publishes a message to a hub.
- [LogAnalyticsQuery](./loganalyticsquery.md) _class_ - Azure Function that executes a KQL query against Log Analytics and returns the result table as JSON.
