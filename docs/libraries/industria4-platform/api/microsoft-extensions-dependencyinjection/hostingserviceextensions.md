---
title: "HostingServiceExtensions"
---

# HostingServiceExtensions

_public class_

Namespace: `Microsoft.Extensions.DependencyInjection`

Source: `src/Shared/Hosting/HostingServiceExtensions.cs`

## Summary

Extension methods for that register the hosting module infrastructure.

## Methods

### AddModules

_method_

```csharp
IServiceCollection AddModules(this IServiceCollection services)
```

Registers (scoped) and (singleton) into the container. The service collection to add to. The same so that calls can be chained.

