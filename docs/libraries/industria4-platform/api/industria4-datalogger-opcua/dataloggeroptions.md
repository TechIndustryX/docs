---
title: "DataLoggerOptions"
---

# DataLoggerOptions

_public class_

Namespace: `Industria4.DataLogger.OpcUa`

Source: `src/DataLogger/DataLogger.OpcUa/DataLoggerOptions.cs`

## Summary

Top-level configuration options for the OPC UA data-logger.

## Properties

### Nodes

_property_

```csharp
Dictionary<string,DataLoggerTagOptions> Nodes
```

Gets the dictionary of OPC UA node logging configurations keyed by logical node name (case-insensitive).

### SkipSubscriptionTrigger

_property_

```csharp
bool SkipSubscriptionTrigger
```

Gets or sets a value indicating whether the initial subscription-trigger event is skipped. Defaults to .

### Targets

_property_

```csharp
Dictionary<string,DataLoggerTargetOptions> Targets
```

Gets the dictionary of InfluxDB target configurations keyed by target name (case-insensitive).

