---
title: "LogAnalyticsOptions"
---

# LogAnalyticsOptions

_public class_

Namespace: `Azure.Monitor.Collector`

Source: `Azure.Monitor.Collector/LogAnalyticsOptions.cs`

## Summary

Configuration options for the legacy Azure Monitor Log Analytics HTTP Data Collector API (2016-04-01).

## Properties

### JsonSerializerOptions

_property_

```csharp
JsonSerializerOptions JsonSerializerOptions
```

Gets or sets the JSON serialization settings applied when formatting metric payloads.

### WorkspaceId

_property_

```csharp
string WorkspaceId
```

Gets or sets the Log Analytics workspace ID.

### WorkspaceKey

_property_

```csharp
string WorkspaceKey
```

Gets or sets the primary or secondary shared key used to sign requests.

