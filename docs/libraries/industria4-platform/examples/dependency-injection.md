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
        // Adds the backend process module to the platform module catalog.
        services.AddModule<WebApiModule>(this);
    }

    // Required by the host to attach package/catalog metadata to this startup service.
    CatalogContext ICatalogContextAccessor.CatalogContext { get; set; }
}
```

This registers the backend process module into the hosting catalog.

## API Startup

```csharp title="MyFeature.WebApi/Startup.cs"
public void ConfigureServices(IServiceCollection services)
{
    // Handlers can depend on ClaimsPrincipal without touching HttpContext directly.
    services.AddScoped(p =>
        p.GetRequiredService<IHttpContextAccessor>().HttpContext?.User
        ?? new ClaimsPrincipal());

    services.AddCorrelation();
    services.AddMyFeatureEntityFramework(options =>
    {
        // Keep the actual connection string injectable by deployment environment.
        var connectionString = Environment.ExpandEnvironmentVariables(
            Configuration.GetConnectionString("MyFeature"));
        options.UseSqlServer(connectionString);
    });

    services.AddServiceBus(bus =>
    {
        // Routing, handlers and queue selection are configured together per feature.
        bus.AddMyFeatureCommandsRoute();
        bus.AddMyFeatureHandlers();
        bus.UseMyFeatureQueue();
    });

    // Options bind once from configuration and are injected through IOptions<T>.
    services.Configure<MyFeatureOptions>(Configuration.GetSection("MyFeature"));
    services.Configure<CqrsOptions>(Configuration.GetSection("Cqrs"));

    services.AddControllers()
        .AddCqrsGateway(options =>
        {
            // The gateway exposes commands under the same API version as controllers.
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
        // Client packages can be discovered in server contexts; skip UI-only services there.
        bool isClient = services.Any(s => s.ServiceType == typeof(IMenuService));
        if (!isClient) return;

        // Localization is needed by menu items and UI labels.
        services.AddResourceProvider(Localization.ResourceManager);

        // Transient view models keep state isolated per page/component instance.
        services.AddTransient<MyItemsViewModel>();
        services.AddTransient<MyItemViewModel>();

        // Bind feature and HTTP options from shared appsettings sections.
        services.Configure<MyFeatureOptions>(configuration.GetSection("MyFeature"));
        services.Configure<HttpMyFeatureOptions>(configuration.GetSection("Http"));

        // Register route discovery, module lifecycle and API access.
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
