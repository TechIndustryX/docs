---
title: "InputMetric"
---

# InputMetric

_public class_

Namespace: `TechIndustry.Streaming.AzureFunctions.Models`

Source: `TechIndustry.Streaming.AzureFunctions/Models/InputMetric.cs`

## Summary

Represents a single metric data point received from a TwinCAT data stream, carrying a stream name and arbitrary key/value fields.

## Properties

### Data

_property_

```csharp
IDictionary<string,object>? Data
```

Gets or sets any additional JSON fields that form the metric payload.

### StreamName

_property_

```csharp
string StreamName
```

Gets or sets the name of the source data stream; used as the destination Log Analytics table.

