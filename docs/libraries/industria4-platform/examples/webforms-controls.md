---
title: Web Forms Controls
---

# Web Forms Controls

## Scenario

Use the shared Blazor Web Forms controls to build pages that look and behave like the existing MES, Recipes, Production and Globalization screens.

The examples below are based on real usage in the platform modules. Use the same patterns when creating a new frontend module.

## Loading

Render `Loading` once on pages that use `ILoadingService`. The component watches the service and shows the shared overlay while an operation is running.

```cshtml title="MyItems.razor"
@inject ILoadingService LoadingService

<Loading />

<button class="btn btn-secondary" @onclick="RefreshAsync">
    Refresh
</button>

@code {
    private Task RefreshAsync()
    {
        // Keep async UI blocking centralized in ILoadingService.
        return LoadingService.LoadAsync(ViewModel.LoadAsync);
    }
}
```

## RowInput

`RowInput` gives forms the same label, validation and help layout used by MES and Recipes. Use `EmitRow="false"` when the parent markup already defines the row.

```cshtml title="EditItem.razor"
<EditForm Model="@ViewModel" OnValidSubmit="@ViewModel.SaveAsync">
    <DataAnnotationsValidator />

    <RowInput Label="Code" Help="Unique machine or recipe code">
        <Input>
            <InputText class="form-control" @bind-Value="ViewModel.Code" />
        </Input>
    </RowInput>

    <div class="form-group row">
        <label class="col-3 col-form-label">Additional field</label>
        <div class="col-9">
            @* Production uses this pattern when it already owns the surrounding row. *@
            <RowInput @bind-Value="ViewModel.MetadataValue" EmitRow="false" />
        </div>
    </div>
</EditForm>
```

## Date

Use `Date<T>` when the platform date styling is required around Blazor's `InputDate`.

```cshtml title="SchedulingFields.razor"
<RowInput Label="Due date">
    <Input>
        <Date TItem="DateTime?"
              @bind-Value="ViewModel.DueDate"
              ValueExpression="@(() => ViewModel.DueDate)"
              Disabled="@ViewModel.ReadOnly" />
    </Input>
</RowInput>
```

## SwitchInput

`SwitchInput` is the platform boolean input. MES uses the same form-row pattern for work-order flags and quantity options.

```cshtml title="Options.razor"
<RowInput Label="Enabled">
    <Input>
        <SwitchInput @bind-Value="ViewModel.Enabled" />
    </Input>
</RowInput>
```

## Spinner

Use `Spinner` for a local busy indicator. `Loading` uses the same component for the global overlay; direct use is useful when only one section is refreshing.

```cshtml title="RecipeStatus.razor"
<button class="btn btn-secondary" @onclick="RefreshAsync" disabled="@isRefreshing">
    <Spinner Visible="@isRefreshing" />
    Refresh status
</button>

@code {
    private bool isRefreshing;

    private async Task RefreshAsync()
    {
        isRefreshing = true;
        try
        {
            // Keep the refresh scoped to this button instead of showing the global overlay.
            await ViewModel.RefreshStatusAsync();
        }
        finally
        {
            isRefreshing = false;
        }
    }
}
```

## Select

Use `Select<TValue>` for searchable or typed drop-downs. Globalization uses it for culture/unit selection; Recipes uses it for model selection.

```cshtml title="LanguageSelection.razor"
<Select Data="ViewModel.Cultures"
        TValue="CultureInfo"
        class="smallCombo pull-right"
        FilteringMode="@DataGridFilteringMode.None"
        TextFieldName="DisplayName"
        @bind-Value="ViewModel.SelectedCulture" />
```

```cshtml title="NewRecipe.razor"
<Select Data="@models"
        TValue="ModelRead"
        NullText="(none)"
        TextFieldName="Description"
        @bind-Value="selectedModel" />
```

## ObjectSelect

Use `ObjectSelect<T>` when the selectable values are rich objects and the display text comes from a template. Recipes uses it for lookup-value parameters.

```cshtml title="LookupParameter.razor"
<ObjectSelect T="LookupValueItemViewModel"
              Data="@LookupValues"
              Disabled="@Value.Disabled"
              @bind-Value="@SelectedLookupValue">
    <ItemTemplate Context="item">
        @item.Description
    </ItemTemplate>
</ObjectSelect>
```

## ObjectRowInput

`ObjectRowInput` chooses the matching typed `RowInput<T>` at runtime. Recipes uses the globalization wrapper `LanguageObjectRowInput` for model and recipe parameters whose value type is known only from metadata.

```cshtml title="RecipeParameter.razor"
@foreach (var parameter in ViewModel.Parameters)
{
    <ObjectRowInput Label="@parameter.Description"
                    Disabled="@parameter.Disabled"
                    EmitRow="false"
                    @bind-Value="parameter.Value" />
}
```

## TagSelection

`TagSelection` edits one key/value tag pair. It is normally rendered by `MultiTagSelection`, but use it directly for a single tag editor.

```cshtml title="SingleTag.razor"
<TagSelection SelectedTag="@ViewModel.Tag"
              SelectedTagChanged="@OnTagChanged"
              OnKeys="ViewModel.GetTagKeysAsync"
              OnValues="ViewModel.GetTagValuesAsync"
              OnDelete="ViewModel.ClearTag"
              EditMode="true" />
```

## MultiTagSelection

Production uses `MultiTagSelection` for deployment and composition filters. It owns add/delete UI and delegates key/value lookup to the view model.

```cshtml title="Deployment.razor"
<MultiTagSelection EditMode="true"
                   @bind-SelectedTags="ViewModel.Tags"
                   OnKeys="ViewModel.GetTagsKeyAsync"
                   OnValues="ViewModel.GetTagValuesAsync" />
```

```cshtml title="Deployments.razor"
<MultiTagSelection SelectedTags="ViewModel.Tags"
                   SelectedTagsChanged="OnSelectedTagsChanged"
                   OnKeys="ViewModel.GetTagsKeyAsync"
                   OnValues="ViewModel.GetTagValuesAsync" />
```

## Modal

Use `Modal` for component-owned dialogs such as Recipes' `NewRecipe`, `CloneRecipe` and selection dialogs. Keep a component reference and expose a `ShowAsync` method.

```cshtml title="NewItem.razor"
<Modal @ref="modal" Title="New item" MaxWidth="700px">
    <ChildContent>
        <EditForm Model="@Model">
            <RowInput @bind-Value="Model.Description" EmitRow="false" />
        </EditForm>
    </ChildContent>
    <Footer>
        <button type="button" class="btn btn-primary" @onclick="ConfirmAsync">Create</button>
        <button type="button" class="btn btn-secondary" @onclick="modal.HideAsync">Cancel</button>
    </Footer>
</Modal>

@code {
    private Modal modal = null!;

    public Task ShowAsync()
        => modal.ShowAsync();
}
```

## Dialog

Place `Dialog` once in the app shell, then call `IDialogService` from view models or components for confirmations and error messages.

```cshtml title="MainLayout.razor"
<Dialog />
@Body
```

```csharp title="RecipeViewModel.cs"
public async Task DeleteAsync()
{
    // Existing modules use AskAsync before destructive operations.
    if (!await DialogService.AskAsync(Localizer["Recipes_Title"], Localizer["Recipe_DeleteConfirm"]))
    {
        return;
    }

    await RecipeClient.DeleteAsync(Id);
}
```

## DataGrid

`DataGrid<T>` wraps `QuickGrid<T>` with Bootstrap styling, row-selection behavior and component hooks. Recipes and MES use server-side providers for OData-backed lists.

```cshtml title="Recipes.razor"
@using Microsoft.AspNetCore.Components.QuickGrid

<DataGrid T="RecipeRead"
          ItemsProvider="@ViewModel.GetRecipesProvider"
          @ref="grid"
          Pagination="@pagination"
          RowSelected="ViewModel.SelectRecipe">
    <DataGridPropertyColumn T="RecipeRead"
                            TProp="string"
                            Property="@(r => r.Description)"
                            Title="@Localizer["Recipes_Header_Description"]"
                            Sortable="true" />

    <DataGridTemplateColumn T="RecipeRead" Title="Customer">
        <ChildContent>
            @{
                var value = context.Metadata.TryGetValue("Client", out var client)
                    ? client
                    : string.Empty;
            }
            @value
        </ChildContent>
    </DataGridTemplateColumn>
</DataGrid>

<DataGridPaginator State="@pagination" />

@code {
    private DataGrid<RecipeRead> grid = null!;
    private PaginationState pagination = new() { ItemsPerPage = 10 };
}
```

## DataGridTemplateColumn

Use `HandleClick="false"` when the cell contains buttons, drag handles or controls that should not select the row.

```cshtml title="WorkOrders.razor"
<DataGridTemplateColumn T="WorkOrderRead" Title="Actions" HandleClick="false">
    <ChildContent>
        <button class="btn btn-sm btn-secondary" @onclick="() => ViewModel.OpenChangesAsync(context)">
            Changes
        </button>
    </ChildContent>
</DataGridTemplateColumn>
```

## DataGridPaginator

Keep the `PaginationState` beside the grid component. The paginator updates the same state used by `ItemsProvider`.

```cshtml title="PagedList.razor"
<DataGrid T="WorkOrderRead"
          ItemsProvider="@ViewModel.GetWorkOrdersProvider"
          Pagination="@pagination" />

<DataGridPaginator State="@pagination" />

@code {
    private PaginationState pagination = new() { ItemsPerPage = 20 };
}
```

## Section

Use `Section` when the current page contributes content to a named page area. Recipes, MES and Production use `footer` sections for action buttons.

```cshtml title="Recipe.razor"
<Section Name="footer">
    <div class="col-sm-9">
        <button class="btn btn-primary btn-lg" type="button" onclick="$('#formSubmit').click()">
            <i class="fa fa-save"></i>
            &nbsp;Save
        </button>
    </div>
</Section>
```

## SectionPlaceholder

Use `SectionPlaceholder<TContext>` to make a page extensible by other modules. The context is the host view model or component.

```cshtml title="Deployment.razor"
<SectionPlaceholder Name="Production.Deployment.Header" Context="ViewModel" />

<table class="table">
    <thead>
        <tr>
            <SectionPlaceholder Name="Production.Deployment.Header.Left" Context="ViewModel" />
            <th>Description</th>
            <th>Model</th>
            <SectionPlaceholder Name="Production.Deployment.Header.Right" Context="ViewModel" />
        </tr>
    </thead>
</table>
```

## NavMenu

`NavMenu` renders the shell menu from `IMenuService`. Hosting uses it in `MainLayout` and passes the hosting assembly so the sidebar can show the build version.

```cshtml title="MainLayout.razor"
<NavMenu Assembly="@GetType().Assembly"
         MenuOrder="@HostingOptions.Value.MenuOrder">
    <BottomContent>
        <button class="btn btn-link nav-link" @onclick="SignOutAsync">
            Sign out
        </button>
    </BottomContent>
</NavMenu>
```

## NavMenuItem

`NavMenuItem` renders one `MenuItem`, including nested children. Use it only when creating a custom shell menu; normal app layouts should use `NavMenu`.

```cshtml title="CustomMenu.razor"
@foreach (var item in MenuService.Items)
{
    // NavMenuItem handles links, click handlers, titles and child items.
    <NavMenuItem Item="@item" />
}
```

## ComponentsHook

Use `ComponentsHook` when a module must observe an existing component instance. `Mes.WebApp.Recipes` uses it to attach the recipe selector to the work-order component and read its public view model.

```csharp title="Recipe.razor.cs"
protected override async Task OnInitializedAsync()
{
    await base.OnInitializedAsync();

    // includeHistory lets the hook run even if WorkOrder rendered before this component.
    await ComponentsHook.AddHookAsync<WorkOrder>(OnWorkOrder, includeHistory: true);
}

private Task OnWorkOrder(WorkOrder workOrder)
{
    _viewModel = workOrder.PublicViewModel;
    return LoadSelectedRecipeAsync();
}

protected override void Dispose(bool disposing)
{
    if (disposing)
    {
        ComponentsHook.RemoveHook<WorkOrder>(OnWorkOrder);
    }
}
```

## ComponentHook

Use `ComponentHook<T>` when a component does not inherit from `MonitorComponentBase` but still needs to publish parameter updates to `ComponentsHook`.

```cshtml title="CustomShell.razor"
<ComponentHook T="ExternalWidget" Child="@widget" />

<ExternalWidget @ref="widget"
                Model="@ViewModel.WidgetModel" />

@code {
    private ExternalWidget widget = null!;
}
```

## Control Selection Rules

- Use `RowInput`, `Date`, `SwitchInput`, `Select` and `ObjectSelect` inside edit forms.
- Use `ObjectRowInput` when the value type comes from parameter metadata at runtime.
- Use `DataGrid`, columns and `DataGridPaginator` for OData-backed list pages.
- Use `Modal` for a specific component dialog and `DialogService` for generic app-level messages.
- Use `Section` and `SectionPlaceholder` when screens must be extended by another package.
- Use `NavMenu` only in app shells and `NavMenuItem` only for custom menu rendering.
- Use `ComponentsHook` and `ComponentHook` only when a module must integrate with component instances owned by another package.
