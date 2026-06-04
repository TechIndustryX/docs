---
title: "ServiceCollectionExtensions"
---

# ServiceCollectionExtensions

_public class_

Namespace: `Microsoft.Extensions.DependencyInjection`

Source: `src/Hosting/Hosting.Startup/ServiceCollectionExtensions.cs`

## Summary

Extension methods for registering license services in the dependency-injection container.

## Methods

### AddLicense

_method_

```csharp
IServiceCollection AddLicense(this IServiceCollection services)
```

Registers data protection and as a singleton service. The service collection to configure. The same `services` instance for chaining.

