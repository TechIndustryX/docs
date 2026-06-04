---
title: "StartupService"
---

# StartupService

_public class_

Namespace: `Industria4.Globalization.WebApp`

Source: `src/Globalization/Globalization.WebApp/StartupService.cs`

## Summary

Startup service that registers Globalization WebAssembly UI services and modules into the host.

## Methods

### ConfigureServices

_method_

```csharp
void ConfigureServices(IConfiguration configuration,IServiceCollection services)
```

Configures services required by the Globalization WebApp, including HTTP clients, view-models, scoped contexts, and modules. The application configuration. The service collection to configure.

