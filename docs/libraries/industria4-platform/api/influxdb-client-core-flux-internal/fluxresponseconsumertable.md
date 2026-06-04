---
title: "FluxResponseConsumerTable"
---

# FluxResponseConsumerTable

_public class_

Namespace: `InfluxDB.Client.Core.Flux.Internal`

Source: `src/DataLogger/DataLogger.WebApp/Flux/FluxCsvParser.cs`

## Summary

Default implementation that collects all parsed tables into an in-memory list.

## Properties

### Tables

_property_

```csharp
List<FluxTable> Tables
```

Gets the list of objects accumulated so far by the parser.

## Methods

### Accept

_method_

```csharp
void Accept(int index,FluxRecord record)
```

### Accept

_method_

```csharp
void Accept(int index,FluxTable table)
```

### ParseFluxResponse

_method_

```csharp
void ParseFluxResponse(Stream source,IFluxResponseConsumer consumer)
```

Parse Flux CSV response to . CSV Data source to accept or

### ParseFluxResponse

_method_

```csharp
void ParseFluxResponse(string source,IFluxResponseConsumer consumer)
```

Parses a Flux CSV response string, forwarding each table/record to `consumer`. Flux CSV response as a string. The consumer that receives parsed and objects.

### ParseFluxResponseAsync

_method_

```csharp
IAsyncEnumerable<(FluxTable,FluxRecord)> ParseFluxResponseAsync(StringReader reader,[EnumeratorCancellation] CancellationToken cancellationToken)
```

Parse Flux CSV response to . CSV Data source reader cancellation token

