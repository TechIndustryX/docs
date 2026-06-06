---
title: Frontend Module
---

# Frontend Module

## Scenario

Create a Blazor frontend module that registers menu entries, routes and view models in the platform web app.

The reference pattern is `Industria4.Mes.WebApp.Modules.MesModule`: it implements `IClientModule`, waits for authentication state, checks authorization and adds menu items through `IMenuService`.

## Folder Shape

```text
src/MyFeature/
  MyFeature.WebApp/
    Modules/MyFeatureModule.cs
    Routing/DynamicRouteBuilderProvider.cs
    Views/MyItems.razor
    ViewModels/MyItemsViewModel.cs
    StartupService.cs
```

## Client Module

```csharp title="Modules/MyFeatureModule.cs"
using Industria4.Globalization;
using Industria4.Hosting.Modules;
using Industria4.Web.Forms.Globalization.Services;
using Industria4.Web.Forms.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Components.Authorization;
using Microsoft.AspNetCore.Components.Routing;
using Microsoft.Extensions.Localization;

namespace Industria4.MyFeature.WebApp.Modules;

public sealed class MyFeatureModule : IClientModule
{
    private readonly IMenuService _menuService;
    private readonly AuthenticationStateProvider _authenticationStateProvider;
    private readonly IAuthorizationService _authorizationService;
    private readonly ILanguageContext _languageContext;
    private readonly IStringLocalizer<Localization> _localizer;

    public MyFeatureModule(
        IMenuService menuService,
        AuthenticationStateProvider authenticationStateProvider,
        IAuthorizationService authorizationService,
        ILanguageContext languageContext,
        IStringLocalizer<Localization> localizer)
    {
        _menuService = menuService;
        _authenticationStateProvider = authenticationStateProvider;
        _authorizationService = authorizationService;
        _languageContext = languageContext;
        _localizer = localizer;
    }

    public string Name => "My Feature";

    public async Task LoadAsync(CancellationToken cancellationToken)
    {
        _authenticationStateProvider.AuthenticationStateChanged +=
            async state => await PopulateMenuItemsAsync(await state);

        var authenticationState = await _authenticationStateProvider.GetAuthenticationStateAsync();
        await PopulateMenuItemsAsync(authenticationState);
    }

    private async Task PopulateMenuItemsAsync(AuthenticationState authenticationState)
    {
        if ((await _authorizationService.AuthorizeAsync(
                authenticationState.User,
                "MyFeature.Items")).Succeeded)
        {
            _menuService.Items.Add(new LanguageMenuItem(_languageContext, "MyFeature_Title", _localizer)
            {
                Match = NavLinkMatch.Prefix,
                HrefType = typeof(Views.MyItems),
                Icon = "far fa-list-alt"
            });
        }
    }

    public Task UnloadAsync(CancellationToken cancellationToken) => Task.CompletedTask;
}
```

## Dynamic Routes

```csharp title="Routing/DynamicRouteBuilderProvider.cs"
using Industria4.Web.Forms.Routing;

namespace Industria4.MyFeature.WebApp.Routing;

public sealed class DynamicRouteBuilderProvider : IDynamicRouteBuilderProvider
{
    public IEnumerable<Type> GetTypes()
    {
        return new[]
        {
            typeof(Views.MyItems),
            typeof(Views.MyItem)
        };
    }
}
```

## Startup Service

```csharp title="StartupService.cs"
using Industria4.Hosting;
using Industria4.MyFeature.Http;
using Industria4.MyFeature.WebApp.Modules;
using Industria4.MyFeature.WebApp.Routing;
using Industria4.MyFeature.WebApp.ViewModels;
using Industria4.Web.Forms.Services;

namespace Industria4.MyFeature.WebApp;

public sealed class StartupService : IStartupService
{
    public void ConfigureServices(IConfiguration configuration, IServiceCollection services)
    {
        var isClient = services.Any(s => s.ServiceType == typeof(IMenuService));
        if (!isClient) return;

        services.AddResourceProvider(Localization.ResourceManager);
        services.AddTransient<MyItemsViewModel>();
        services.AddTransient<MyItemViewModel>();

        services.Configure<MyFeatureOptions>(configuration.GetSection("MyFeature"));
        services.AddDynamicRouteBuilderProvider<DynamicRouteBuilderProvider>();
        services.AddModule<MyFeatureModule>();
        services.AddHttpMyFeature();

        services.Configure<HttpMyFeatureOptions>(configuration.GetSection("Http"));
        services.ConfigurePolicyOptions(configuration.GetSection("Policies"));
    }
}
```

## Step By Step

1. Create the Blazor views.
2. Create view models for state and API calls.
3. Create `DynamicRouteBuilderProvider` and return all routable component types.
4. Create an `IClientModule` implementation.
5. Add menu entries in `LoadAsync`.
6. Protect menu entries with authorization policies.
7. Register view models, routes, HTTP client and module from `StartupService`.
8. Verify the module appears only in client-side contexts.

## Validation

The frontend module is correct when:

- the menu entry appears only for authorized users;
- links generated from `HrefType` navigate to the Blazor component;
- dynamic routes survive reload and deep-link navigation;
- HTTP clients and view models resolve from DI.
