---
title: Dependency Injection
---

# Dependency Injection

## Scenario

Register a module's backend and frontend dependencies using the platform standard `IStartupService` hook.

`StartupService` is the package entry point. It receives the global configuration and the shared `IServiceCollection`, then registers services, options, modules, routes and clients.

## Backend Startup Service

```csharp title="MyFeature.WebApi.Hosting/StartupService.cs"
using Industria4.Hosting;
using Industria4.Hosting.Catalogs;

public sealed class StartupService : IStartupService, ICatalogContextAccessor
{
    public void ConfigureServices(IConfiguration configuration, IServiceCollection services)
    {
        services.AddModule<WebApiModule>(this);
    }

    CatalogContext ICatalogContextAccessor.CatalogContext { get; set; }
}
```

This registers the backend process module into the hosting catalog.

## API Startup

```csharp title="MyFeature.WebApi/Startup.cs"
public void ConfigureServices(IServiceCollection services)
{
    services.AddScoped(p =>
        p.GetRequiredService<IHttpContextAccessor>().HttpContext?.User
        ?? new ClaimsPrincipal());

    services.AddCorrelation();
    services.AddMyFeatureEntityFramework(options =>
    {
        var connectionString = Environment.ExpandEnvironmentVariables(
            Configuration.GetConnectionString("MyFeature"));
        options.UseSqlServer(connectionString);
    });

    services.AddServiceBus(bus =>
    {
        bus.AddMyFeatureCommandsRoute();
        bus.AddMyFeatureHandlers();
        bus.UseMyFeatureQueue();
    });

    services.Configure<MyFeatureOptions>(Configuration.GetSection("MyFeature"));
    services.Configure<CqrsOptions>(Configuration.GetSection("Cqrs"));

    services.AddControllers()
        .AddCqrsGateway(options =>
        {
            options.BasePath = "/v1";
            options.CqrsAssemblies.Add(typeof(AddMyItemCommand).Assembly);
        })
        .AddODataSupport()
        .AddNewtonsoftJson(options =>
            options.SerializerSettings.ConfigureForCqrs().ConfigureForOData());

    services.ConfigurePolicyOptions(Configuration.GetSection("Policies"));
    services.AddIndustria4Security(Configuration);
}
```

## Frontend Startup Service

```csharp title="MyFeature.WebApp/StartupService.cs"
public sealed class StartupService : IStartupService
{
    public void ConfigureServices(IConfiguration configuration, IServiceCollection services)
    {
        bool isClient = services.Any(s => s.ServiceType == typeof(IMenuService));
        if (!isClient) return;

        services.AddResourceProvider(Localization.ResourceManager);
        services.AddTransient<MyItemsViewModel>();
        services.AddTransient<MyItemViewModel>();

        services.Configure<MyFeatureOptions>(configuration.GetSection("MyFeature"));
        services.Configure<HttpMyFeatureOptions>(configuration.GetSection("Http"));

        services.AddDynamicRouteBuilderProvider<DynamicRouteBuilderProvider>();
        services.AddModule<MyFeatureModule>();
        services.AddHttpMyFeature();

        services.ConfigurePolicyOptions(configuration.GetSection("Policies"));
    }
}
```

## Registration Rules

- Register backend process modules from `*.WebApi.Hosting`.
- Register API infrastructure from the API `Startup`.
- Register frontend modules from `*.WebApp`.
- Guard frontend registrations with the `IMenuService` client check.
- Register view models as transient.
- Register typed HTTP clients through an `AddHttp...` extension.
- Register options from named configuration sections.
- Register policies from the shared `Policies` section.

## Validation

Use these checks:

1. Backend host can resolve `IEnumerable<IModule>`.
2. API can resolve repositories, command handlers and configured options.
3. Frontend can resolve view models and HTTP clients.
4. Menu entries appear only after `IClientModule.LoadAsync`.
5. Authorization policies exist on both server and client.
