---
title: "HttpServiceExtensions"
---

# HttpServiceExtensions

_public class_

Namespace: `Microsoft.Extensions.DependencyInjection`

Source: `src/Mes/Mes.Http/HttpServiceExtensions.cs`

## Summary

Extension methods that register the MES HTTP clients with the DI container.

## Methods

### AddHttpMes

_method_

```csharp
IServiceCollection AddHttpMes(this IServiceCollection services)
```

Registers as a transient service. The service collection to add the client to. The same `services` for chaining.

