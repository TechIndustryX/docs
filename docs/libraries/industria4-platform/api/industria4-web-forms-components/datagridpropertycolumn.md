---
title: "DataGridPropertyColumn<T, TProp>"
---

# DataGridPropertyColumn&lt;T, TProp&gt;

_public class_

Namespace: `Industria4.Web.Forms.Components`

Source: `src/Shared/Web.Forms/Components/QuickGrid/DataGridPropertyColumn.cs`

## Summary

Extends to integrate with and support row click interception via .

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

