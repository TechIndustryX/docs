---
title: Module Definition
---

# Module Definition

## Scenario

Understand what a module is in the platform and choose the correct implementation for backend and frontend features.

## Core Contract

```csharp
public interface IModule
{
    string Name { get; }
    Task LoadAsync(CancellationToken cancellationToken);
    Task UnloadAsync(CancellationToken cancellationToken);
}

public interface IClientModule : IModule
{
}
```

Every module has a display name and lifecycle. The host calls `LoadAsync` when the module is activated and `UnloadAsync` when the module is removed or the host stops.

## Backend Module

Use `ProcessModule` when the module is an external backend process:

```csharp
public sealed class WebApiModule : ProcessModule
{
    public override string Name => "MES API";
    public override string ProcessNameExe => "Industria4.Mes.WebApi.exe";
    public override string WorkingDir => Path.Combine(base.WorkingDir, "bin");
    public override IDictionary<string, string> Environment =>
        Configuration.GetEnvironmentVariablesFromSection("Packages:Mes.WebApi");
}
```

`ProcessModule` manages:

- process start;
- process stop;
- automatic restart when the child exits;
- environment injection;
- web process ping when `ASPNETCORE_URLS` is configured.

## Frontend Module

Use `IClientModule` when the module runs in the Blazor client:

```csharp
public sealed class MyFeatureModule : IClientModule
{
    public string Name => "My Feature";

    public Task LoadAsync(CancellationToken cancellationToken)
    {
        // Register menus, client state and UI integration.
        return Task.CompletedTask;
    }

    public Task UnloadAsync(CancellationToken cancellationToken)
    {
        // Remove timers or subscriptions if the module owns any.
        return Task.CompletedTask;
    }
}
```

## Choosing The Module Type

Use a backend process module when:

- the capability has its own ASP.NET Core API;
- the capability must run independently from the web UI;
- it owns database access, CQRS handlers or machine integration;
- it needs process isolation.

Use a frontend client module when:

- the capability adds Blazor pages;
- it registers menu entries;
- it contributes dynamic routes;
- it adds screen sections or view models.

## Step By Step

1. Name the bounded capability.
2. Decide whether it needs backend, frontend or both.
3. Implement `ProcessModule` for backend API process hosting.
4. Implement `IClientModule` for frontend registration.
5. Register each module through the package `StartupService`.
6. Keep module constructors DI-only; avoid manual service location except at boundaries.
7. Use `UnloadAsync` for subscriptions, timers and external resources.

## Validation

A module definition is correct when its lifecycle can be exercised independently: load, use, unload, reload.
