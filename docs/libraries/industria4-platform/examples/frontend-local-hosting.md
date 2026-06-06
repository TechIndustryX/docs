---
title: Frontend Local Hosting
---

# Frontend Local Hosting

## Scenario

When you build a frontend module, you should test it inside the real Industria4 web shell, not as an isolated Blazor page. The Silver project shows the intended pattern: the solution references the platform source as a submodule, adds a custom `*.WebApp` project, and lets the platform host discover the module through the normal module catalog and `StartupService` flow.

Use this setup when you need to validate:

- menu registration and authorization;
- dynamic routes and deep links;
- section providers injected into built-in pages;
- options read from `DefaultConfiguration`;
- static assets exposed through `_content/<AssemblyName>/...`;
- packaging output before deploying the module to a target environment.

## Solution Layout

The Silver-style layout keeps the custom module and the platform side by side:

```text
src/
  MyMachine.sln
  MyMachine.Recipes.WebApp/
    MyMachine.Recipes.WebApp.csproj
    StartupService.cs
    MyMachineModule.cs
    MyMachineSectionsProvider.cs
    package.json
    build.ps1
    Views/
    wwwroot/
  MyMachine.OpcUa/
    Startup.cs
    MyMachineOpcUaMiddleware.cs
    package.json
    build.ps1
submodules/
  Industria4/
    src/
      Hosting/Hosting.WebApp/
      Hosting/Hosting.WebApp.Server/
      Recipes/Recipes.WebApp/
      Shared/Web.Forms/
```

The important part is that the frontend module references the platform UI project that it extends. In Silver, the module extends Recipes, so its project references `Recipes.WebApp`.

```xml title="MyMachine.Recipes.WebApp.csproj"
<Project Sdk="Microsoft.NET.Sdk.Razor">
  <PropertyGroup>
    <TargetFramework>netstandard2.1</TargetFramework>
    <LangVersion>8.0</LangVersion>
    <RazorLangVersion>3.0</RazorLangVersion>
    <AssemblyName>MyMachine.Recipes.WebApp</AssemblyName>
    <RootNamespace>MyMachine.Recipes.WebApp</RootNamespace>
    <DxExtendStartupHost>false</DxExtendStartupHost>
  </PropertyGroup>

  <ItemGroup>
    <!-- Keep the manifest in the project but out of the Razor content pipeline. -->
    <Content Remove="package.json" />
    <None Include="package.json" />
  </ItemGroup>

  <ItemGroup>
    <!-- Reference the built-in frontend module you want to extend. -->
    <ProjectReference Include="..\..\submodules\Industria4\src\Recipes\Recipes.WebApp\Recipes.WebApp.csproj" />
  </ItemGroup>
</Project>
```

## Client Manifest

The host only treats the package as a frontend module when the manifest declares `Type: Client`. `EntryPoint` must match the assembly that contains `StartupService`.

```json title="package.json"
{
  "Name": "MyMachine.Recipes.WebApp",
  "TargetProcessNames": [],
  "EntryPoint": "MyMachine.Recipes.WebApp",
  "Type": "Client",
  "Version": "1.0",
  "DefaultConfiguration": {
    "MyMachine": {
      "PreviewEnabled": true,
      "RecipePreviewSection": "Recipes.Recipe.RightColumn",
      "ActionFooterSection": "Recipes.Recipe.Footer.Left"
    }
  }
}
```

Keep machine-specific labels, parameter paths and feature switches in `DefaultConfiguration`. Do not hard-code them in Razor components; options let the same package run against several recipe models or machines.

## Startup Service

`StartupService` is the module entry point. It runs when the package is loaded, receives the merged configuration, and registers the frontend services into DI.

```csharp title="StartupService.cs"
using System.Linq;
using Industria4.Hosting;
using Industria4.Web.Forms.Components;
using Industria4.Web.Forms.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace MyMachine.Recipes.WebApp;

public sealed class StartupService : IStartupService
{
    public void ConfigureServices(IConfiguration configuration, IServiceCollection services)
    {
        // The same assembly can be inspected outside the Blazor client.
        // IMenuService is present only in the client shell, so use it as a guard.
        bool isClient = services.Any(s => s.ServiceType == typeof(IMenuService));
        if (!isClient) return;

        // Register extension slots used by built-in pages.
        services.AddScoped<ISectionsProvider, MyMachineSectionsProvider>();

        // Bind DefaultConfiguration:MyMachine plus environment overrides.
        services.Configure<MyMachineOptions>(configuration.GetSection("MyMachine"));

        // Register the module lifecycle object.
        services.AddModule<MyMachineModule>();
    }
}
```

## Client Module

Use `IClientModule` for logic that must run when the frontend module is loaded. Silver uses this hook to attach to recipe parameters through `ComponentsHook` and then change UI state according to the selected parameter path.

```csharp title="MyMachineModule.cs"
using Industria4.Hosting.Modules;
using Industria4.Recipes.WebApp.Views.Recipe;
using Industria4.Web.Forms;
using Microsoft.Extensions.Options;

namespace MyMachine.Recipes.WebApp;

public sealed class MyMachineModule : IClientModule
{
    private readonly ComponentsHook _componentsHook;
    private readonly IOptions<MyMachineOptions> _options;

    public MyMachineModule(ComponentsHook componentsHook, IOptions<MyMachineOptions> options)
    {
        _componentsHook = componentsHook;
        _options = options;
    }

    public string Name => "My Machine";

    public async Task LoadAsync(CancellationToken cancellationToken)
    {
        // Attach to every rendered recipe parameter row.
        await _componentsHook.AddHookAsync<Parameter>(OnParameterAsync);
    }

    private Task OnParameterAsync(Parameter parameter)
    {
        // Match parameter paths from configuration instead of hard-coding model keys.
        if (parameter.Value.MatchPath(_options.Value.CalculatedAnglePath))
        {
            parameter.Value.Disabled = true;
        }

        return Task.CompletedTask;
    }

    public Task UnloadAsync(CancellationToken cancellationToken) => Task.CompletedTask;
}
```

## Section Providers

Use `ISectionsProvider` when you need to put module UI inside a built-in page. Silver contributes a preview component to the right column of the Recipes page and action buttons to the footer.

```csharp title="MyMachineSectionsProvider.cs"
using Industria4.Web.Forms.Components;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Rendering;

namespace MyMachine.Recipes.WebApp;

public sealed class MyMachineSectionsProvider : ISectionsProvider
{
    public IEnumerable<SectionItem> GetItems()
    {
        yield return new SectionItem("Recipes.Recipe.RightColumn", Render<RecipePreview>);
        yield return new SectionItem("Recipes.Recipe.Footer.Left", Render<RecipeActions>);
    }

    private static void Render<T>(RenderTreeBuilder builder)
        where T : IComponent
    {
        builder.OpenComponent<T>(0);
        builder.CloseComponent();
    }
}
```

The placeholder names are contracts exposed by the host page. If the placeholder is wrong, the package loads but your component never appears.

## Local Host Workflow

1. Add the platform repository under `submodules/Industria4` or place it beside your custom solution.
2. Add the platform projects needed by the shell to the solution: `Hosting.WebApp`, `Hosting.WebApp.Server`, shared `Web.Forms`, and the built-in frontend module you extend.
3. Add your `*.WebApp` project to the same solution.
4. Reference the built-in frontend project you extend, such as `Recipes.WebApp`.
5. Implement `StartupService`, `IClientModule` and optional `ISectionsProvider`.
6. Add a `package.json` with `Type: Client`, `EntryPoint` and `DefaultConfiguration`.
7. Package the module with its `build.ps1`.
8. Load the resulting zip into the local platform host or place it in the local package catalog used by `Hosting.WebApp.Server`.
9. Run `Hosting.WebApp.Server`.
10. Open the platform URL and navigate to the built-in page you extended.

## Build Script

The frontend package build publishes the Razor class library, keeps the module assembly and static assets, and writes a zip under `src/build/<configuration>/`.

```powershell title="MyMachine.Recipes.WebApp/build.ps1"
$moduleName = 'MyMachine.Recipes.WebApp'
$configuration = if ($env:configuration -eq $null) { 'debug' } else { $env:configuration }

$output = [System.IO.Path]::GetTempFileName()
Remove-Item $output -Recurse -Force
Write-Host "Preparing into $output"

# Publish the Razor class library and its dependencies.
dotnet publish --runtime win-x64 --output $output --configuration $configuration

# Keep only the module assemblies and module-owned static files.
Remove-Item $output\* -Exclude MyMachine* -Force -Recurse
Copy-Item wwwroot $output -Recurse -ErrorAction SilentlyContinue
Copy-Item package.json $output

Compress-Archive `
    -Path $output/* `
    -CompressionLevel Optimal `
    -DestinationPath ../build/$configuration/$moduleName.zip `
    -Force
```

## Static Assets

Put JavaScript, images, Unity/WebGL output or CSS under `wwwroot`. At runtime the assets are served by the host under:

```text
_content/MyMachine.Recipes.WebApp/<asset-path>
```

For example:

```razor title="RecipePreview.razor"
<script src="_content/MyMachine.Recipes.WebApp/preview.js"></script>
<div id="recipe-preview"></div>
```

## Troubleshooting

- The module does not load: check `EntryPoint`, package zip structure and that `StartupService` is in the entry assembly.
- The module loads but nothing appears: check the `isClient` guard and the section placeholder name.
- The menu or route is missing: register `IClientModule` with `services.AddModule<T>()` and add a dynamic route provider when the module owns pages.
- Options are empty: verify the `DefaultConfiguration` section name and overrides in the host catalog.
- Static assets return 404: ensure `wwwroot` is copied into the package zip.
- Code works in isolation but fails in the shell: test inside `Hosting.WebApp.Server`; that is the real runtime for menu, auth, routing, hooks and static file behavior.
