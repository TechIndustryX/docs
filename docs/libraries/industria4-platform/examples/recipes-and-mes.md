---
title: Recipes and MES
---

# Recipes and MES

## Scenario

Connect Recipes to MES work orders the way the platform actually does it:

- `Mes.WebApp.Recipes` injects a recipe selector into the MES work-order page.
- The selected recipe id is stored in `WorkOrderViewModel.Metadata["RecipeId"]`.
- Optional validation prevents the work order from moving to `Ready` or `Running` without a recipe.
- The download action calls `RecipeClient.WriteRecipeAsync`.
- `Recipes.WebApi` flattens recipe parameters and writes OPC UA node values through `NodeClient`.

## Frontend Section Registration

The MES integration is a frontend extension package. It does not edit the MES work-order page directly; it contributes a section item.

```csharp title="Mes.WebApp.Recipes/SectionsProvider.cs"
public sealed class SectionsProvider : ISectionsProvider
{
    public IEnumerable<SectionItem> GetItems()
    {
        // This placeholder is exposed by the MES WorkOrder page.
        yield return SectionItem.Create<Recipe>("Mes.WorkOrder.InnerGeneral");
    }
}
```

```csharp title="Mes.WebApp.Recipes/StartupService.cs"
public void ConfigureServices(IConfiguration configuration, IServiceCollection services)
{
    bool isClient = services.Any(s => s.ServiceType == typeof(IMenuService));
    if (!isClient) return;

    // Registers the section provider that injects the recipe component.
    services.AddScoped<ISectionsProvider, SectionsProvider>();

    // Controls RequiresRecipe, ShowSelectButton and ShowDownloadButton.
    services.Configure<MesRecipesOptions>(configuration.GetSection("Mes:Recipes"));

    services.AddModule<MesRecipesModule>();
}
```

## Work Order Recipe Component

The injected component uses `ComponentsHook` to attach to the rendered MES `WorkOrder` component and obtain its public view model.

```csharp title="Mes.WebApp.Recipes/Recipe.razor.cs"
private const string RecipeIdKey = "RecipeId";
private WorkOrderViewModel _viewModel;
private RecipeRead _selectedRecipe;

protected override async Task OnInitializedAsync()
{
    await base.OnInitializedAsync();

    // Replay is important because the host WorkOrder page may already be rendered.
    await ComponentsHook.AddHookAsync<WorkOrder>(OnWorkOrder, includeHistory: true);
}

private async Task OnWorkOrder(WorkOrder workOrder)
{
    _viewModel = workOrder.PublicViewModel;

    // RequiresRecipe makes recipe selection part of work-order state validation.
    if (Options.Value.RequiresRecipe)
    {
        _viewModel.ChangingState += OnChangingState;
    }

    await LoadingService.LoadAsync(async () =>
    {
        if (_viewModel.Metadata.TryGetValue(RecipeIdKey, out object id))
        {
            // The work order stores only the recipe id; the UI resolves the display value.
            SelectedRecipe = (await RecipeClient.GetAsync(q => q.Where(v => v.Id == (string)id)))
                .Items
                .FirstOrDefault();
        }
    });
}
```

## Store Selection In Work Order Metadata

The selected recipe is not a direct MES field. The integration stores it as metadata under `RecipeId`.

```csharp title="Mes.WebApp.Recipes/Recipe.razor.cs"
private RecipeRead SelectedRecipe
{
    get => _selectedRecipe;
    set
    {
        if (value != null)
        {
            // MES persists metadata with the work order.
            _viewModel.Metadata[RecipeIdKey] = value.Id;
        }
        else
        {
            _viewModel.Metadata.Remove(RecipeIdKey);
        }

        _selectedRecipe = value;
        StateHasChanged();
    }
}
```

## Block Ready Or Running Without A Recipe

When `Mes:Recipes:RequiresRecipe` is enabled, the integration cancels specific MES state transitions.

```csharp title="Mes.WebApp.Recipes/Recipe.razor.cs"
private void OnChangingState(object sender, ChangeStateEventArgs e)
{
    if ((e.State == WorkOrderState.Running || e.State == WorkOrderState.Ready)
        && SelectedRecipe == null)
    {
        // Cancelling here prevents the MES state command from being sent.
        e.Cancel = true;

        var dialogService = ServiceProvider.GetRequiredService<IDialogService>();
        var localizer = ServiceProvider.GetRequiredService<IStringLocalizer<Localization>>();
        _ = dialogService.ShowAsync(localizer["Recipe_Missing"], localizer["Recipe_Missing_Message"], null);
    }
}
```

## Download The Selected Recipe

The download button is optional and protected by `Recipes.Recipe.Download`. The component asks for confirmation and delegates the actual server operation to `RecipeClient`.

```cshtml title="Mes.WebApp.Recipes/Recipe.razor"
@if (Options.Value.ShowDownloadButton)
{
    <AuthorizeView Policy="Recipes.Recipe.Download">
        <button class="btn btn-secondary"
                type="button"
                disabled="@(SelectedRecipe == null)"
                @onclick="DownloadAsync">
            <i class="fa fa-download"></i>
            &nbsp;@Localizer["Recipe_Download"]
        </button>
    </AuthorizeView>
}
```

```csharp title="Mes.WebApp.Recipes/Recipe.razor.cs"
private async Task DownloadAsync()
{
    if (SelectedRecipe == null) return;

    var confirmed = await DialogService.AskAsync(
        Localizer["Recipe_Download_Confirmation"],
        Localizer["Recipe_Download_ConfirmMessage"]);

    if (!confirmed) return;

    await LoadingService.LoadAsync(async () =>
    {
        // serverId is null here; the API/controller decides the effective target.
        await RecipeClient.WriteRecipeAsync(SelectedRecipe.Id, serverId: null);
        Toaster.Success(Localizer["Recipe_Downloaded"]);
    });
}
```

## Typed Client Call

`RecipeClient.WriteRecipeAsync` posts to `/v1/recipe/write` using the standard platform `RestClient`.

```csharp title="Recipes.Http/RecipeClient.cs"
public Task WriteRecipeAsync(string recipeId, string serverId, CancellationToken token = default)
{
    var request = new WriteRecipeModel
    {
        RecipeId = recipeId,
        ServerId = serverId
    };

    return _restClient.PostAsync<WriteRecipeModel, object>(
        new Uri($"{Uri}/write", UriKind.RelativeOrAbsolute),
        request,
        token);
}
```

## Server-Side Write Flow

The API loads the recipe, flattens model-linked parameters and writes OPC UA values.

```csharp title="Recipes.WebApi/Controllers/RecipeController.cs"
[HttpPost("write")]
[Authorize("Recipes.Recipe.Download")]
public async Task<IActionResult> WriteRecipe(
    [FromBody] WriteRecipeModel model,
    [FromServices] RecipeService recipeService,
    [FromServices] IDataAccessObject<RecipeRead> recipeDataAccessObject,
    [FromServices] IRepository<Recipe> repo,
    [FromServices] NodeClient nodeClient)
{
    var recipeRead = recipeDataAccessObject.FirstOrDefault(r => r.Id == model.RecipeId);
    if (recipeRead == null) return NotFound();

    var recipe = await repo.GetAsync(model.RecipeId);

    // Resolves nested model parameters and model-link parameters into writable values.
    var parameters = await recipeService.GetFlattenedRecipeParametersAsync(model.RecipeId);

    var request = new WriteModel
    {
        ServerId = model.ServerId,
        Metadata =
        {
            ["RecipeId"] = model.RecipeId,
            ["RecipeDescription"] = recipeRead.Description,
            ["RecipeModelDescription"] = recipeRead.ModelDescription,
            ["RecipeModelId"] = recipeRead.ModelId
        }
    };

    foreach (var pair in parameters)
    {
        // Parameters without WriteNodeId are valid for UI/read flows but are not written.
        if (string.IsNullOrWhiteSpace(pair.Key.WriteNodeId)) continue;

        object[] values = pair.Value.SelectMany(value => value.Value.Values).ToArray();
        for (var i = 0; i < values.Length; i++)
        {
            // Array parameters use '*' as the node-index placeholder.
            string nodeId = pair.Key.WriteNodeId.Replace("*", i.ToString());
            request.Nodes[nodeId] = DataValue.Create(pair.Key.Operation.Type, values[i]);
        }
    }

    await nodeClient.WriteAsync(request);
    return Ok();
}
```

## Remote Recipes

Recipes can reference recipes on other server URIs. The controller rewrites the `RecipeClient.Uri` host and recursively calls `WriteRecipeAsync` for each remote recipe.

```csharp title="Recipes.WebApi/Controllers/RecipeController.cs"
foreach (var (uri, recipeId) in recipe.RemoteRecipes)
{
    var uriBuilder = new UriBuilder(recipeClient.Uri)
    {
        Host = uri.Host
    };

    recipeClient.Uri = uriBuilder.Uri;
    await recipeClient.WriteRecipeAsync(recipeId, model.ServerId, HttpContext.RequestAborted);
}
```

## Step By Step

1. Install `Recipes.WebApi` and `Recipes.WebApp`.
2. Install `Mes.WebApi`, `Mes.WebApp` and `Mes.WebApp.Recipes`.
3. Enable `Mes:Recipes:ShowSelectButton` when operators must choose a recipe on the work order.
4. Enable `Mes:Recipes:RequiresRecipe` when `Ready` or `Running` must require a selected recipe.
5. Enable `Mes:Recipes:ShowDownloadButton` and grant `Recipes.Recipe.Download` when operators can write values to machines.
6. Configure Recipes `Http:OpcUa` and the OPC UA module so `NodeClient.WriteAsync` can reach the target server.
7. Set `WriteNodeId` on model parameters that must be written to OPC UA.
8. Use `*` inside `WriteNodeId` for array parameters.

## Validation

The integration is correct when:

- the recipe selector appears inside the MES work-order general section;
- selecting a recipe writes `RecipeId` into work-order metadata;
- `RequiresRecipe` blocks `Ready` and `Running` transitions without a recipe;
- `RecipeClient.WriteRecipeAsync` posts to `/v1/recipe/write`;
- the API sends the expected OPC UA node/value map to `NodeClient`.
