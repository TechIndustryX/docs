---
title: "PassThroughMiddleware"
---

# PassThroughMiddleware

_public class_

Namespace: `Industria4.OpcUa.Comunication.Middleware`

Source: `src/OpcUa/OpcUa.Comunication/Middleware/PassThroughMiddleware.cs`

## Summary

Base no-op middleware that forwards every call to the next handler. Override individual methods to intercept specific operations.

## Methods

### ReadNodesAsync

_method_

```csharp
Task ReadNodesAsync(MiddlewareContext<IEnumerable<NodeId>,IDictionary<string,object>,IReadOnlyList<KeyValuePair<NodeId,object>>> context,Func<Task> next)
```

### StartAsync

_method_

```csharp
Task StartAsync(MiddlewareContext context,Func<Task> next)
```

### SubscribeNodeAsync

_method_

```csharp
Task SubscribeNodeAsync(MiddlewareContext<NodeId,Action<object>,IDisposable> context,Func<Task> next)
```

### WriteNodesAsync

_method_

```csharp
Task WriteNodesAsync(MiddlewareContext<IDictionary<NodeId,object>,IDictionary<string,object>,bool> context,Func<Task> next)
```

