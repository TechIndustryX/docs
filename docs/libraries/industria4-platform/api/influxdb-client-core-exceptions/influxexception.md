---
title: "InfluxException"
---

# InfluxException

_public class_

Namespace: `InfluxDB.Client.Core.Exceptions`

Source: `src/DataLogger/DataLogger.WebApp/Flux/InfluxException.cs`

## Summary

Base exception for all InfluxDB client errors. Carries an HTTP status code and a reference error code.

## Constructors

### InfluxException

_constructor_

```csharp
InfluxException(Exception exception)
```

Initializes an wrapping an existing exception (error code 0).

### InfluxException

_constructor_

```csharp
InfluxException(string message,Exception exception = null)
```

Initializes an with a message and an optional inner exception (error code defaults to 0).

### InfluxException

_constructor_

```csharp
InfluxException(string message,int code,Exception exception = null)
```

Initializes an with a message, numeric error code, and an optional inner exception.

## Properties

### Code

_property_

```csharp
int Code
```

Gets the reference code unique to the error type. If the reference code is not present than return "0".

### Status

_property_

```csharp
int Status
```

Gets the HTTP status code of the unsuccessful response. If the response is not present than return "0".

