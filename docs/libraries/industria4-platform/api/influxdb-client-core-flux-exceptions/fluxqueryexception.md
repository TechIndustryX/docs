---
title: "FluxQueryException"
---

# FluxQueryException

_public class_

Namespace: `InfluxDB.Client.Core.Flux.Exceptions`

Source: `src/DataLogger/DataLogger.WebApp/Flux/FluxQueryException.cs`

## Summary

Exception thrown when an InfluxDB Flux query returns an error response.

## Constructors

### FluxQueryException

_constructor_

```csharp
FluxQueryException(string message,int reference)
```

Initializes a with the server error message and reference code.

## Properties

### Reference

_property_

```csharp
int Reference
```

Gets the reference error code returned by InfluxDB in the error response.

