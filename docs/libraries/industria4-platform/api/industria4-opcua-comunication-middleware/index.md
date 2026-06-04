---
title: "Industria4.OpcUa.Comunication.Middleware"
---

# Industria4.OpcUa.Comunication.Middleware

This namespace contains 8 public API types.

## Types

- [IOpcUaMiddleware](./iopcuamiddleware.md) _interface_ - Defines a middleware component in the OPC-UA client pipeline.
- [MiddlewareContext](./middlewarecontext-4.md) _class_ - Base context object passed through the OPC-UA middleware pipeline.
- [MiddlewareContext&lt;TParameter1, TParameter2, TResult&gt;](./middlewarecontext.md) _class_ - Middleware context carrying two typed input parameters and a typed result.
- [MiddlewareContext&lt;TParameter1, TResult&gt;](./middlewarecontext-2.md) _class_ - Middleware context carrying one typed input parameter and a typed result.
- [MiddlewareContext&lt;TResult&gt;](./middlewarecontext-3.md) _class_ - Middleware context that holds a typed result value.
- [OpcUaClientMiddleware](./opcuaclientmiddleware.md) _class_ - Terminal middleware that delegates all pipeline calls directly to an .
- [OpcUaClientMiddlewareWrapper](./opcuaclientmiddlewarewrapper.md) _class_ - An wrapper that routes every call through the registered middleware pipeline.
- [PassThroughMiddleware](./passthroughmiddleware.md) _class_ - Base no-op middleware that forwards every call to the next handler. Override individual methods to intercept specific operations.
