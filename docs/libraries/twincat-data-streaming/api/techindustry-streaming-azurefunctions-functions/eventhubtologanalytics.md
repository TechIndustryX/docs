---
title: "EventHubToLogAnalytics"
---

# EventHubToLogAnalytics

_public class_

Namespace: `TechIndustry.Streaming.AzureFunctions.Functions`

Source: `TechIndustry.Streaming.AzureFunctions/Functions/EventHubToLogAnalytics.cs`

## Summary

Azure Function that receives Event Hub batches from a TwinCAT data stream and forwards them to Log Analytics.

## Methods

### Run

_method_

```csharp
Task Run([EventHubTrigger("%EventHubToLogAnalytics%",Connection = "EventHubToLogAnalytics")
```

Processes an array of Event Hub messages and ingests their metric payload into Log Analytics.

