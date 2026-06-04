---
title: "Series"
---

# Series

_public class_

Namespace: `Industria4.DataLogger.WebApp.ViewModels`

Source: `src/DataLogger/DataLogger.WebApp/ViewModels/DataLoggerViewModel.cs`

## Summary

A single InfluxDB measurement series within a query result.

## Properties

### Columns

_property_

```csharp
string[] Columns
```

Gets or sets the column name array.

### Name

_property_

```csharp
string Name
```

Gets or sets the measurement name.

### Values

_property_

```csharp
string[][] Values
```

Gets or sets the data rows as a jagged string array.

