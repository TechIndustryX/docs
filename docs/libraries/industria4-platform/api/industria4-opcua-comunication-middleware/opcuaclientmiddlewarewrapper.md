---
title: "OpcUaClientMiddlewareWrapper"
---

# OpcUaClientMiddlewareWrapper

_public class_

Namespace: `Industria4.OpcUa.Comunication.Middleware`

Source: `src/OpcUa/OpcUa.Comunication/Middleware/OpcUaClientMiddlewareWrapper.cs`

## Summary

An wrapper that routes every call through the registered middleware pipeline.

## Constructors

### OpcUaClientMiddlewareWrapper

_constructor_

```csharp
OpcUaClientMiddlewareWrapper(IEnumerable<IOpcUaMiddleware> middlewares,ILogger<OpcUaClientMiddlewareWrapper> logger)
```

Initialises a new with the ordered middleware chain.

## Methods

### StartAsync

_method_

```csharp
Task StartAsync()
```

### SubscribeNodeAsync

_method_

```csharp
Task<IDisposable> SubscribeNodeAsync(NodeId nodeId,Action<object> callback)
```

### WriteNodesAsync

_method_

```csharp
Task WriteNodesAsync(IDictionary<NodeId,object> nodeValues,IDictionary<string,object> metadata)
```

