---
title: "NodeClient"
---

# NodeClient

_public class_

Namespace: `Industria4.OpcUa.Http`

Source: `src/OpcUa/OpcUa.Http/NodeClient.cs`

## Summary

HTTP client for OPC-UA node read and write operations.

## Constructors

### NodeClient

_constructor_

```csharp
NodeClient(RestClient restClient,IOptions<HttpOpcUaOptions> options)
```

Initialises a new using the configured OPC-UA service options.

## Methods

### WriteAsync

_method_

```csharp
Task WriteAsync(WriteModel model,CancellationToken token = default)
```

Writes node values to the OPC-UA service.

