---
title: Web Forms Controls
---

# Web Forms Controls

## Scenario

Use the shared Blazor Web Forms controls to build consistent platform screens.

The shared components include layout helpers, form rows, selection controls, loading wrappers, dialogs, menu items and data-grid helpers.

## Form Page Example

```razor title="MyItem.razor"
@page "/my-feature/items/{Id}"
@inject MyItemViewModel ViewModel
@inject IDialogService Dialogs

@* Loading listens to ILoadingService; the view model can trigger it without UI coupling. *@
<Loading />

<EditForm Model="@ViewModel.Item" OnValidSubmit="@ViewModel.SaveAsync">
    @* Standard Blazor validation works with the platform input controls. *@
    <DataAnnotationsValidator />

    <RowInput Label="Code">
        <Input>
            <InputText class="form-control" @bind-Value="ViewModel.Item.Code" />
        </Input>
    </RowInput>

    <RowInput Label="Description">
        <Input>
            <InputText class="form-control" @bind-Value="ViewModel.Item.Description" />
        </Input>
    </RowInput>

    <RowInput Label="Enabled">
        <Input>
            <SwitchInput @bind-Value="ViewModel.Item.Enabled" />
        </Input>
    </RowInput>

    <button type="submit" class="btn btn-primary">Save</button>
</EditForm>
```

## Data Grid Example

```razor title="MyItems.razor"
@page "/my-feature/items"
@inject MyItemsViewModel ViewModel

<Loading />

<DataGrid Items="@ViewModel.Items" RowSelected="@ViewModel.OpenAsync">
    @* Property columns keep sorting and display metadata tied to the read model. *@
    <DataGridPropertyColumn Property="@(x => x.Code)" Title="Code" />
    <DataGridPropertyColumn Property="@(x => x.Description)" Title="Description" />
</DataGrid>

@* Keep paging state in the view model so refreshes preserve the current page. *@
<DataGridPaginator State="@ViewModel.Pagination" />
```

## Dialog Example

```csharp title="ViewModel.cs"
public sealed class MyItemsViewModel(IDialogService dialogs)
{
    public async Task DeleteAsync(string id)
    {
        // Confirm destructive actions through the shared dialog service.
        var confirmed = await dialogs.ConfirmAsync(
            "Delete item",
            "Do you want to delete this item?");

        // Returning early keeps the command path explicit and easy to test.
        if (!confirmed) return;

        await Client.DeleteAsync(id);
    }
}
```

## Control Usage Guide

- `Loading`: render the shared loading overlay driven by `ILoadingService`.
- `Section` and `SectionPlaceholder`: register and render extension points between modules.
- `RowInput`: show label/value rows with consistent spacing.
- `Select` and `ObjectSelect`: bind enum, string or object choices.
- `Date`: edit date/time values with the platform style.
- `SwitchInput`: edit boolean values.
- `Modal` and `Dialog`: use for confirmations and short forms.
- `DataGrid`: list read models returned by OData queries.
- `DataGridPaginator`: keep server-side paging visible to the user.

## Step By Step

1. Put state and API calls in a view model.
2. Add `Loading` once to pages that use `ILoadingService`.
3. Use `RowInput` for each form field.
4. Use `DataGrid` for query results.
5. Use `DialogService` for confirmations.
6. Keep visual conventions consistent with existing MES and Identity screens.

## Validation

The screen is consistent when it has the same loading behavior, spacing, dialogs and grid pagination as existing platform modules.
