---
title: "ServicesExtensions"
---

# ServicesExtensions

_public class_

Namespace: `Microsoft.Extensions.DependencyInjection`

Source: `src/Shared/DataAccessObject/ServicesExtensions.cs`

## Summary

Extension methods for that wrap data access objects to filter soft-deleted entities automatically.

## Methods

### AddDaoDeletion

_method_

```csharp
IServiceCollection AddDaoDeletion(this IServiceCollection services)
```

Replaces all registered services that implements where T is of type . The replacement filter automatically all deleted entities

