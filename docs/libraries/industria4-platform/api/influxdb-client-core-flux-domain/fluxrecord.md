---
title: "FluxRecord"
---

# FluxRecord

_public class_

Namespace: `InfluxDB.Client.Core.Flux.Domain`

Source: `src/DataLogger/DataLogger.WebApp/Flux/FluxRecord.cs`

## Summary

A record is a tuple of values. Each record in the table represents a single point in the series. Specification .

## Constructors

### FluxRecord

_constructor_

```csharp
FluxRecord(int table)
```

Initializes a new associated with the given table index.

## Properties

### Table

_property_

```csharp
int Table
```

The Index of the table that the record belongs.

### Values

_property_

```csharp
Dictionary<string,object> Values
```

The record's values.

## Methods

### GetField

_method_

```csharp
string GetField()
```

get value with key _field

### GetMeasurement

_method_

```csharp
string GetMeasurement()
```

get value with key _measurement

### GetStart

_method_

```csharp
Instant? GetStart()
```

the inclusive lower time bound of all records

### GetStop

_method_

```csharp
Instant? GetStop()
```

the exclusive upper time bound of all records

### GetTime

_method_

```csharp
Instant? GetTime()
```

The timestamp as a the time of the record

### GetTimeInDateTime

_method_

```csharp
DateTime? GetTimeInDateTime()
```

The timestamp as a the time of the record

### GetValue

_method_

```csharp
object GetValue()
```

the value of the record

### GetValueByIndex

_method_

```csharp
object GetValueByIndex(int index)
```

Get FluxRecord value by index. index of value in CSV response value

### GetValueByKey

_method_

```csharp
object GetValueByKey(string key)
```

Get FluxRecord value by key. the key of value in CSV response value

### ToString

_method_

```csharp
string ToString()
```

Returns a debug-friendly string showing the table index and the number of values in this record.

