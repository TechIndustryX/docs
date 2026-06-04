---
title: "HttpProxyMiddleware"
---

# HttpProxyMiddleware

_public class_

Namespace: `Industria4.Web`

Source: `src/Shared/Web/HttpProxyMiddleware.cs`

## Summary

ASP.NET Core middleware that forwards requests to a host specified by the `x-proxy-host` header.

## Constructors

### HttpProxyMiddleware

_constructor_

```csharp
HttpProxyMiddleware(RequestDelegate next)
```

Initialises the middleware with the next delegate in the pipeline. The next middleware delegate.

## Methods

### Invoke

_method_

```csharp
Task Invoke(HttpContext httpContext,IHttpClientFactory httpClientFactory)
```

Forwards the request to the proxy host when the `x-proxy-host` header is present; otherwise passes through to the next middleware. The current HTTP context. Factory for creating the forwarding HTTP client.

