---
title: "SecurityHeadersAttribute"
---

# SecurityHeadersAttribute

_public class_

Namespace: `Industria4.Identity.WebApi.Components`

Source: `src/Identity/Identity.WebApi/Components/SecurityHeadersAttribute.cs`

## Summary

Action filter that adds security-related HTTP response headers to MVC view results.

## Methods

### OnResultExecuting

_method_

```csharp
void OnResultExecuting(ResultExecutingContext context)
```

Adds security headers (CSP, X-Frame-Options, etc.) before the action result is executed. The result-executing context.

