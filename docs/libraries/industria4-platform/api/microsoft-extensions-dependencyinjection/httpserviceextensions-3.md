---
title: "HttpServiceExtensions"
---

# HttpServiceExtensions

_public class_

Namespace: `Microsoft.Extensions.DependencyInjection`

Source: `src/Identity/Identity.Http/HttpServiceExtensions.cs`

## Summary

Extension methods that register the Identity HTTP clients with the DI container.

## Methods

### AddHttpIdentity

_method_

```csharp
IServiceCollection AddHttpIdentity(this IServiceCollection services)
```

Registers and as transient services. The service collection to add the clients to. The same `services` for chaining.

