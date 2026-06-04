---
title: "ServiceCollectionExtensions"
---

# ServiceCollectionExtensions

_public class_

Namespace: `Microsoft.Extensions.DependencyInjection`

Source: `src/TechIndustry.Hsds/ServiceCollectionExtensions.cs`

## Summary

Extension methods for registering HSDS client services in the dependency-injection container.

## Methods

### AddHsdsClient

_method_

```csharp
IHttpClientBuilder AddHsdsClient(this IServiceCollection services,Uri uri)
```

Registers and configures its to target `uri`. The service collection to add the client to. The base URI of the HSDS server. The for further HTTP client configuration.

