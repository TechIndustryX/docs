---
title: "LogAnalyticsQuery"
---

# LogAnalyticsQuery

_public class_

Namespace: `TechIndustry.Streaming.AzureFunctions.Functions`

Source: `TechIndustry.Streaming.AzureFunctions/Functions/LogAnalyticsQuery.cs`

## Summary

Azure Function that executes a KQL query against Log Analytics and returns the result table as JSON.

## Methods

### Run

_method_

```csharp
Task<IActionResult> Run([HttpTrigger(AuthorizationLevel.Function,"post")
```

Deserializes the KQL query from the request body, executes it, and returns the result.

