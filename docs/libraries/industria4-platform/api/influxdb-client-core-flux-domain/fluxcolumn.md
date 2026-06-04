---
title: "FluxColumn"
---

# FluxColumn

_public class_

Namespace: `InfluxDB.Client.Core.Flux.Domain`

Source: `src/DataLogger/DataLogger.WebApp/Flux/FluxColumn.cs`

## Summary

This class represents column header specification of .

## Properties

### DataType

_property_

```csharp
string DataType
```

The data type of column (e.g., "string", "long", "dateTime:RFC3339").

### DefaultValue

_property_

```csharp
string DefaultValue
```

Default value to be used for rows whose string value is the empty string.

### Group

_property_

```csharp
bool Group
```

Boolean flag indicating if the column is part of the table's group key.

### Index

_property_

```csharp
int Index
```

Column index in record.

### Label

_property_

```csharp
string Label
```

The label of column (e.g., "_start", "_stop", "_time").

## Methods

### ToString

_method_

```csharp
string ToString()
```

Returns a debug-friendly string showing all column metadata fields.

