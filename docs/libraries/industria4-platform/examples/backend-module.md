---
title: Backend Module
---

# Backend Module

## Scenario

Create a backend module that is started by the platform host as a child process. Use this pattern for bounded-context APIs such as MES, OPC UA, Globalization or Identity.

The reference pattern is `Industria4.Mes.WebApi.Hosting.WebApiModule`: it inherits `ProcessModule`, points to the API executable and reads process environment from `Packages:Mes.WebApi`.

## Folder Shape

```text
src/MyFeature/
  MyFeature.WebApi/
    Program.cs
    Startup.cs
    Controllers/
  MyFeature.WebApi.Hosting/
    WebApiModule.cs
    StartupService.cs
```

## Module Class

```csharp title="MyFeature.WebApi.Hosting/WebApiModule.cs"
using Industria4.Hosting.Modules;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace Industria4.MyFeature.WebApi.Hosting;

public sealed class WebApiModule : ProcessModule
{
    // Display name shown by the host while managing this child process.
    public override string Name => "My Feature API";

    // Executable produced by the API project publish/build output.
    public override string ProcessNameExe => "Industria4.MyFeature.WebApi.exe";

    // MES-style packages keep the executable under a bin folder.
    public override string WorkingDir => Path.Combine(base.WorkingDir, "bin");

    // Every key under Packages:MyFeature.WebApi becomes an environment variable.
    public override IDictionary<string, string> Environment =>
        Configuration.GetEnvironmentVariablesFromSection("Packages:MyFeature.WebApi");

    public WebApiModule(
        ILogger<WebApiModule> logger,
        IConfiguration configuration) : base(logger, configuration)
    {
    }
}
```

## Startup Service

```csharp title="MyFeature.WebApi.Hosting/StartupService.cs"
using Industria4.Hosting;
using Industria4.Hosting.Catalogs;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Industria4.MyFeature.WebApi.Hosting;

public sealed class StartupService : IStartupService, ICatalogContextAccessor
{
    public void ConfigureServices(IConfiguration configuration, IServiceCollection services)
    {
        // Registers the process module in the host catalog discovered at startup.
        services.AddModule<WebApiModule>(this);
    }

    // The host fills this context when it loads the package metadata.
    CatalogContext ICatalogContextAccessor.CatalogContext { get; set; }
}
```

## Configuration

```json title="appsettings.json"
{
  "Packages": {
    "MyFeature.WebApi": {
      "ASPNETCORE_URLS": "http://*:8095",
      "ConnectionStrings__MyFeature": "Server=db;Database=myfeature;User Id=app;Password=<secret>"
    }
  },
  "Global": {
    "Globalization__DefaultCulture": "en"
  }
}
```

`ProcessModule` automatically injects:

- variables returned by `Environment`;
- variables from the global configuration section as `Global__...`;
- `INDUSTRIA4_PROCESS=CHILD`;
- the working directory and executable path.

## Step By Step

1. Create the API project that can run independently.
2. Create a hosting project next to the API.
3. Implement `WebApiModule` by inheriting `ProcessModule`.
4. Set a stable display `Name`.
5. Point `ProcessNameExe` to the backend executable.
6. Override `WorkingDir` when the executable is below `bin`.
7. Read module-specific environment from `Packages:<ModuleName>`.
8. Register the module in `StartupService` with `services.AddModule<T>()`.
9. Add the package to the platform host catalog.
10. Start the platform host and verify the child process is started.

## Validation

The backend module is correct when:

- the host logs `Starting process ...MyFeature.WebApi.exe`;
- the API answers on the configured `ASPNETCORE_URLS`;
- stopping the child process causes the host to restart it;
- configuration values arrive as environment variables in the API process.

## Common Errors

- Wrong `ProcessNameExe`: the module loads but cannot start the process.
- Wrong `WorkingDir`: static files, appsettings or binaries are not found.
- Missing `ASPNETCORE_URLS`: the host cannot ping the web process.
- Hard-coded secrets: use environment variables or deployment secrets instead.
