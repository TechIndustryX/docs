---
title: "RowInputBase<TItem>"
---

# RowInputBase&lt;TItem&gt;

_public class_

Namespace: `Industria4.Web.Forms.Components`

Source: `src/Shared/Web.Forms/Components/RowInputBase.cs`

## Summary

Base Blazor component for typed form row inputs, providing label, help, and value binding with automatic label inference from data annotations. The value type bound to this input.

## Properties

### AdditionalAttributes

_property_

```csharp
IReadOnlyDictionary<string,object> AdditionalAttributes
```

Gets or sets a value indicating whether this row is hidden from view. Gets or sets a value indicating whether the input is disabled. Gets or sets the label text displayed next to the input. Gets or sets the help text shown below the input. Gets or sets the bound value of the input. Gets or sets the callback invoked when changes. Gets or sets the expression used to identify the bound field for validation and label inference. Gets or sets additional HTML attributes to pass through to the underlying input element.

### Input

_property_

```csharp
RenderFragment Input
```

## Methods

### OnParametersSet

_method_

```csharp
void OnParametersSet()
```

### OpenComponent

_method_

```csharp
void OpenComponent(RenderTreeBuilder builder)
```

### RenderInput

_method_

```csharp
void RenderInput(RenderTreeBuilder builder)
```

