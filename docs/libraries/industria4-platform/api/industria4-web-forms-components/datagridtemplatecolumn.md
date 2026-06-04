---
title: "DataGridTemplateColumn<T>"
---

# DataGridTemplateColumn&lt;T&gt;

_public class_

Namespace: `Industria4.Web.Forms.Components`

Source: `src/Shared/Web.Forms/Components/QuickGrid/DataGridTemplateColumn.cs`

## Summary

Extends to integrate with and optionally intercept row clicks via .

## Properties

### ComponentsHook

_property_

```csharp
ComponentsHook ComponentsHook
```

Gets or sets the injected components hook service.

### Grid

_property_

```csharp
DataGrid<T> Grid
```

Gets the parent this column belongs to.

### HandleClick

_property_

```csharp
bool HandleClick
```

Gets or sets whether cell clicks should be forwarded to the grid's row-selected callback. Defaults to `true`.

## Methods

### CellContent

_method_

```csharp
void CellContent(RenderTreeBuilder builder,T item)
```

### OnParametersSetAsync

_method_

```csharp
Task OnParametersSetAsync()
```

