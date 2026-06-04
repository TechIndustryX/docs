---
title: "CoreOpcUaMiddleware"
---

# CoreOpcUaMiddleware

_public class_

Namespace: `Industria4.OpcUa.Comunication.Core`

Source: `src/OpcUa/OpcUa.Comunication.Core/CoreOpcUaMiddleware.cs`

## Summary

Middleware that pre-processes write operations: applies array-item transforms and injects metadata node values.

## Constructors

### CoreOpcUaMiddleware

_constructor_

```csharp
CoreOpcUaMiddleware(ILogger<CoreOpcUaMiddleware> logger,IOptions<CoreOptions> options)
```

Initialises a new with the given options.

## Methods

### WriteNodesAsync

_method_

```csharp
Task WriteNodesAsync(MiddlewareContext<IDictionary<NodeId,object>,IDictionary<string,object>,bool> context,Func<Task> next)
```

