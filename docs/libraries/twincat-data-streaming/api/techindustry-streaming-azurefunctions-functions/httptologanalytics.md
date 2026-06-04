---
title: "HttpToLogAnalytics"
---

# HttpToLogAnalytics

_public class_

Namespace: `TechIndustry.Streaming.AzureFunctions.Functions`

Source: `TechIndustry.Streaming.AzureFunctions/Functions/HttpToLogAnalytics.cs`

## Summary

Azure Function that accepts an HTTP POST of metric data and forwards it to Log Analytics.

## Methods

### Run

_method_

```csharp
Task<IActionResult> Run([HttpTrigger(AuthorizationLevel.Function,"post")
```

Deserializes the JSON request body as an array of and ingests them into Log Analytics.

