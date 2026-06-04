---
title: "PolicyServiceCollectionExtensions"
---

# PolicyServiceCollectionExtensions

_public class_

Namespace: `Microsoft.Extensions.DependencyInjection`

Source: `src/Shared/Web.Core/Authorization/PolicyServiceCollectionExtensions.cs`

## Summary

Extension methods for registering policy-based authorization options from configuration.

## Methods

### ConfigurePolicyOptions

_method_

```csharp
IServiceCollection ConfigurePolicyOptions(this IServiceCollection services,IConfiguration configuration)
```

Reads from configuration and registers an that converts them to ASP.NET Core authorization policies. The service collection to configure. Configuration section containing the policy options. The same for chaining.

