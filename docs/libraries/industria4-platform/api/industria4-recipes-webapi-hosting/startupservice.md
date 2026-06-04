---
title: "StartupService"
---

# StartupService

_public class_

Namespace: `Industria4.Recipes.WebApi.Hosting`

Source: `src/Recipes/Recipes.WebApi.Hosting/StartupService.cs`

## Summary

Startup service that registers the Recipes Web API module with the host's DI container.

## Methods

### ConfigureServices

_method_

```csharp
void ConfigureServices(IConfiguration configuration,IServiceCollection services)
```

Adds the to the service collection so that it is started as part of the host lifecycle. The host configuration. The service collection to configure.

