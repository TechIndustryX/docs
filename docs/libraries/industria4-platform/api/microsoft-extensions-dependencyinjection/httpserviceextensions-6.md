---
title: "HttpServiceExtensions"
---

# HttpServiceExtensions

_public class_

Namespace: `Microsoft.Extensions.DependencyInjection`

Source: `src/Production/Production.Http/HttpServiceExtensions.cs`

## Summary

Extension methods that register the Production HTTP clients with the DI container.

## Methods

### AddHttpProduction

_method_

```csharp
IServiceCollection AddHttpProduction(this IServiceCollection services)
```

Registers and as transient services. The service collection to add the clients to. The same `services` for chaining.

