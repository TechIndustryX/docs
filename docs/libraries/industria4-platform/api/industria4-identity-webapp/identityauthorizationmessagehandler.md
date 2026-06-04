---
title: "IdentityAuthorizationMessageHandler"
---

# IdentityAuthorizationMessageHandler

_public class_

Namespace: `Industria4.Identity.WebApp`

Source: `src/Identity/Identity.WebApp/IdentityAuthorizationMessageHandler.cs`

## Summary

Delegating HTTP handler that attaches a bearer access token to outgoing requests.

## Methods

### SendAsync

_method_

```csharp
Task<HttpResponseMessage> SendAsync(HttpRequestMessage request,CancellationToken cancellationToken)
```

Attaches the bearer token to the request before forwarding it to the inner handler. The outgoing HTTP request message. A token to observe for cancellation. The HTTP response message from the inner handler.

