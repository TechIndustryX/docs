---
title: Module Hosting
---

# Module Hosting

## Scenario

Load platform modules consistently through the shared hosting layer instead of launching each process with separate scripts.

## Module Pattern

```csharp title="WebApiModule.cs"
using Industria4.Hosting.Modules;

public sealed class IdentityWebApiModule : ProcessModule
{
    public override string Name => "identity-webapi";
    public override string ProcessName => "Industria4.Identity.WebApi";
    public override string WorkingDirectory => "modules/identity-webapi";

    public override IDictionary<string, string?> EnvironmentVariables =>
        new Dictionary<string, string?>
        {
            ["ASPNETCORE_URLS"] = "http://+:8081",
            ["ConnectionStrings__Default"] = Configuration["ConnectionStrings:Default"]
        };
}
```

## Host Pattern

```csharp
builder.Services.AddHostedService<ModulesLoaderHostedService>();
builder.Services.AddSingleton<IModule, IdentityWebApiModule>();
builder.Services.AddSingleton<IModule, RecipesWebAppModule>();
builder.Services.AddSingleton<IModule, DataLoggerModule>();
```

## Step By Step

1. Implement a module for every process or package to host.
2. Set a stable module name.
3. Define process name and working directory.
4. Pass configuration through environment variables.
5. Register modules in the host service collection.
6. Let `ModulesLoaderHostedService` start them at application startup.
7. Monitor module logs as part of platform health.

## Validation

Stop a hosted module and restart the host. The module should start from the configured working directory with the expected environment.
