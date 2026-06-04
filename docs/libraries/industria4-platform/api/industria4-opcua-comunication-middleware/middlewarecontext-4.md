---
title: "MiddlewareContext"
---

# MiddlewareContext

_public class_

Namespace: `Industria4.OpcUa.Comunication.Middleware`

Source: `src/OpcUa/OpcUa.Comunication/Middleware/MiddlewareContext.cs`

## Summary

Base context object passed through the OPC-UA middleware pipeline.

## Methods

### Create

_method_

```csharp
MiddlewareContext Create()
```

Creates an empty context.

### Create

_method_

```csharp
MiddlewareContext<TParameter,TResult> Create<TParameter,TResult>(TParameter parameter,TResult result = default)
```

Creates a single-parameter context.

### Create

_method_

```csharp
MiddlewareContext<TParameter1,TParameter2,TResult> Create<TParameter1,TParameter2,TResult>(TParameter1 parameter1,TParameter2 parameter2,TResult result = default)
```

Creates a two-parameter context.

### Create

_method_

```csharp
MiddlewareContext<TResult> Create<TResult>(TResult result = default)
```

Creates a result-only context.

