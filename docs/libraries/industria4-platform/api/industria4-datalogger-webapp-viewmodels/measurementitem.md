---
title: "MeasurementItem"
---

# MeasurementItem

_public class_

Namespace: `Industria4.DataLogger.WebApp.ViewModels`

Source: `src/DataLogger/DataLogger.WebApp/ViewModels/DataLoggerViewModel.cs`

## Summary

Represents a single row from an InfluxDB measurement with optional localization and style overrides applied.

## Properties

### Time

_property_

```csharp
DateTime Time
```

Gets the UTC-to-local-time timestamp of this record.

## Methods

### TryGetIcon

_method_

```csharp
string TryGetIcon(string key)
```

Returns the configured icon CSS class for `key`, or `null` if no icon is defined.

### TryGetStyle

_method_

```csharp
string TryGetStyle(string key)
```

Returns the configured CSS style string for `key`, or `null` if no style is defined.

### TryGetValue

_method_

```csharp
object TryGetValue(string key)
```

Returns the (optionally localized) value for `key`, or `null` if the key is absent.

