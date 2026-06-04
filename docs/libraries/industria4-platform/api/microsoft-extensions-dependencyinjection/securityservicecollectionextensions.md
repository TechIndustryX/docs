---
title: "SecurityServiceCollectionExtensions"
---

# SecurityServiceCollectionExtensions

_public class_

Namespace: `Microsoft.Extensions.DependencyInjection`

Source: `src/Shared/Web/Security/SecurityServiceCollectionExtensions.cs`

## Summary

Extension methods for registering JWT-based security services including Keycloak role claims transformation.

## Methods

### AddIndustria4Security

_method_

```csharp
IServiceCollection AddIndustria4Security(this IServiceCollection services,IConfiguration configuration)
```

Configures JWT bearer authentication, authorization, and Keycloak role claims transformation from . The service collection to configure. Configuration used to read `Identity:Authority` and `Identity:Audience`. The same for chaining.

