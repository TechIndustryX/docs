---
title: "LogAnalyticsOptions"
---

# LogAnalyticsOptions

_public class_

Namespace: `TechIndustry.Streaming.AzureFunctions.Services`

Source: `TechIndustry.Streaming.AzureFunctions/Services/LogAnalyticsOptions.cs`

## Summary

Configuration options for ingesting data to Azure Monitor Log Analytics via the Data Collection Rule endpoint.

## Properties

### IngestionEndpoint

_property_

```csharp
string IngestionEndpoint
```

Gets or sets the Log Analytics ingestion endpoint URI for the DCR.

### RuleId

_property_

```csharp
string RuleId
```

Gets or sets the Data Collection Rule (DCR) ID used to route ingested data.

### WorkspaceId

_property_

```csharp
string WorkspaceId
```

Gets or sets the Log Analytics workspace ID.

