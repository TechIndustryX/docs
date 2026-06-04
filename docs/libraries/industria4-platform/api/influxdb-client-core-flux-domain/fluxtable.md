---
title: "FluxTable"
---

# FluxTable

_public class_

Namespace: `InfluxDB.Client.Core.Flux.Domain`

Source: `src/DataLogger/DataLogger.WebApp/Flux/FluxTable.cs`

## Summary

This class represents table structure of Flux CSV Response. Specification .

## Properties

### Columns

_property_

```csharp
List<FluxColumn> Columns
```

Table column's labels and types.

### Records

_property_

```csharp
List<FluxRecord> Records
```

Table records.

## Methods

### GetGroupKey

_method_

```csharp
List<FluxColumn> GetGroupKey()
```

A table's group key is subset of the entire columns dataset that assigned to the table. As such, all records within a table will have the same values for each column that is part of the group key.

### ToString

_method_

```csharp
string ToString()
```

Returns a debug-friendly string showing the number of columns and records in this table.

