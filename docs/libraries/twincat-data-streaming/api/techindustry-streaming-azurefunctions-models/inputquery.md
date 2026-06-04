---
title: "InputQuery"
---

# InputQuery

_public class_

Namespace: `TechIndustry.Streaming.AzureFunctions.Models`

Source: `TechIndustry.Streaming.AzureFunctions/Models/InputQuery.cs`

## Summary

Represents a Kusto (KQL) query request with an optional set of named parameters.

## Properties

### Data

_property_

```csharp
IDictionary<string,object>? Data
```

Gets or sets additional JSON fields that may be used to parameterise the query.

### Query

_property_

```csharp
string Query
```

Gets or sets the KQL query string to execute against the Log Analytics workspace.

