---
title: "DataLoggerTagOptions"
---

# DataLoggerTagOptions

_public class_

Namespace: `Industria4.DataLogger.OpcUa`

Source: `src/DataLogger/DataLogger.OpcUa/DataLoggerOptions.cs`

## Summary

Configuration options for a single OPC UA tag to be logged.

## Properties

### CollectNodeIds

_property_

```csharp
Dictionary<string,string> CollectNodeIds
```

Gets the dictionary mapping InfluxDB field names to OPC UA node identifiers to collect (case-insensitive).

### RestoreSubscribeNodeValue

_property_

```csharp
object RestoreSubscribeNodeValue
```

Gets or sets the value written back to the subscription node after a trigger is processed.

### ScanInterval

_property_

```csharp
int? ScanInterval
```

Gets or sets the polling interval in milliseconds. When set, a timer reads the node at this interval.

### SourceServerId

_property_

```csharp
string SourceServerId
```

Gets or sets the identifier of the source OPC UA server to read from.

### SubscribeNodeId

_property_

```csharp
string SubscribeNodeId
```

Gets or sets the OPC UA node identifier used for subscription-based triggering.

### Target

_property_

```csharp
string Target
```

Gets or sets the name of the InfluxDB target to write the collected data to.

