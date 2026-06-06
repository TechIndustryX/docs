---
title: Section Provider
---

# Section Provider

## Scenario

Extend an existing frontend screen from another module without editing that screen directly.

The reference pattern is `Industria4.Mes.WebApp.Recipes.SectionsProvider`, which contributes the `Recipe` component to the `Mes.WorkOrder.InnerGeneral` section.

## Blazor Section Provider

```csharp title="SectionsProvider.cs"
using Industria4.Web.Forms.Components;
using Microsoft.AspNetCore.Components;

namespace Industria4.MyFeature.WebApp;

public sealed class SectionsProvider : ISectionsProvider
{
    public IEnumerable<SectionItem> GetItems()
    {
        yield return SectionItem.Create<MyFeatureWorkOrderPanel>(
            "Mes.WorkOrder.InnerGeneral");
    }
}
```

## Section Component

```razor title="MyFeatureWorkOrderPanel.razor"
@inject MyFeatureViewModel ViewModel

<div class="card">
    <div class="card-header">My Feature</div>
    <div class="card-body">
        <RowInput Label="External Code">
            <Input>
                <InputText class="form-control" @bind-Value="ViewModel.ExternalCode" />
            </Input>
        </RowInput>

        <RowInput Label="Machine Group">
            <Input>
                <InputText class="form-control" @bind-Value="ViewModel.MachineGroup" />
            </Input>
        </RowInput>
    </div>
</div>

@code {
    protected override Task OnInitializedAsync()
        => ViewModel.LoadAsync();
}
```

## Host Placeholder

The host page renders the section by name. For example, a work-order page can expose an extension point like this:

```razor title="WorkOrder.razor"
<SectionPlaceholder<WorkOrderViewModel>
    Name="Mes.WorkOrder.InnerGeneral"
    Context="@ViewModel" />
```

## Registration

```csharp title="StartupService.cs"
public void ConfigureServices(IConfiguration configuration, IServiceCollection services)
{
    bool isClient = services.Any(s => s.ServiceType == typeof(IMenuService));
    if (!isClient) return;

    services.AddTransient<MyFeatureViewModel>();
    services.AddScoped<ISectionsProvider, SectionsProvider>();
}
```

## Section Names

Use existing section names when extending existing screens. Examples from the platform:

- `Mes.WorkOrder.InnerGeneral`: adds content inside the MES work-order general area.
- Module-specific names should follow `<BoundedContext>.<Screen>.<Area>`.

## Step By Step

1. Identify the screen and section name to extend.
2. Create a Blazor component for the injected content.
3. Implement `ISectionsProvider`.
4. Return one `SectionItem` per injected component.
5. Register the provider in the frontend `StartupService`.
6. Keep the injected component small and focused.
7. Use a view model when the section calls APIs or owns state.

## Validation

Open the host screen and confirm:

- the injected component appears in the expected position;
- removing the provider removes the section cleanly;
- the section respects authorization and loading state;
- the host page still works without the provider package.

## When To Use

Use a section provider for plugin-style screen extension. Use a dynamic route instead when the module owns a full page.
