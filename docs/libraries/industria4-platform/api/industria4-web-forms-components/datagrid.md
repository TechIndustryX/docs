---
title: "DataGrid<T>"
---

# DataGrid&lt;T&gt;

_public class_

Namespace: `Industria4.Web.Forms.Components`

Source: `src/Shared/Web.Forms/Components/QuickGrid/DataGrid.cs`

## Summary

Extends with Bootstrap styling, integration, and a row-selection event. The item type displayed in the grid.

## Properties

### ComponentsHook

_property_

```csharp
ComponentsHook ComponentsHook
```

Gets or sets the injected components hook service.

### RowSelected

_property_

```csharp
EventCallback<T> RowSelected
```

Raised when the user clicks or activates a grid row.

## Methods

### InterceptClick

_method_

```csharp
void InterceptClick(RenderTreeBuilder builder,T item)
```

### OnParametersSetAsync

_method_

```csharp
Task OnParametersSetAsync()
```

### SetParametersAsync

_method_

```csharp
Task SetParametersAsync(ParameterView parameters)
```

