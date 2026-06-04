---
title: "HttpServiceExtensions"
---

# HttpServiceExtensions

_public class_

Namespace: `Microsoft.Extensions.DependencyInjection`

Source: `src/Globalization/Globalization.Http/HttpServiceExtensions.cs`

## Summary

Extension methods that register the Globalization HTTP clients with the DI container.

## Methods

### AddHttpGlobalization

_method_

```csharp
IServiceCollection AddHttpGlobalization(this IServiceCollection services)
```

Registers and as transient services. The service collection to add the clients to. The same `services` for chaining.

