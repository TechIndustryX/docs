---
title: "DataLoggerOptions"
---

# DataLoggerOptions

_public class_

Namespace: `Industria4.DataLogger.WebApp`

Source: `src/DataLogger/DataLogger.WebApp/DataLoggerOptions.cs`

## Summary

Top-level configuration options for the DataLogger web application.

## Properties

### InfluxDbs

_property_

```csharp
Dictionary<string,DataLoggerInfluxDbOptions> InfluxDbs
```

Gets the dictionary of InfluxDB connection options keyed by database name (case-insensitive).

### Measurements

_property_

```csharp
Dictionary<string,DataLoggerMeasurementOptions> Measurements
```

Gets the dictionary of measurement display options keyed by measurement name (case-insensitive).

