---
title: "HostingEntityFrameworkExtensions"
---

# HostingEntityFrameworkExtensions

_public class_

Namespace: `Microsoft.Extensions.DependencyInjection`

Source: `src/Hosting/Hosting.Startup/HostingEntityFrameworkExtensions.cs`

## Summary

Convenience extension methods for registering the hosting Entity Framework store with default SQLite configuration.

## Methods

### AddHostingEntityFramework

_method_

```csharp
IServiceCollection AddHostingEntityFramework(this IServiceCollection services,ServiceLifetime lifetime = ServiceLifetime.Scoped)
```

Registers hosting Entity Framework services using a SQLite database stored in the Industria4 root folder. The service collection to configure. The service lifetime for the registered services. Defaults to . The same `services` instance for chaining.

