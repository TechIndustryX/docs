---
title: "HttpServiceExtensions"
---

# HttpServiceExtensions

_public class_

Namespace: `Microsoft.Extensions.DependencyInjection`

Source: `src/Hosting/Hosting.Http/HttpServiceExtensions.cs`

## Summary

Extension methods for registering hosting HTTP clients in the dependency-injection container.

## Methods

### AddHttpHosting

_method_

```csharp
IServiceCollection AddHttpHosting(this IServiceCollection services)
```

Registers , , and as transient services. The service collection to configure. The same `services` instance for chaining.

