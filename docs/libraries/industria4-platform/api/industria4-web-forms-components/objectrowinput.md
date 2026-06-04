---
title: "ObjectRowInput"
---

# ObjectRowInput

_public class_

Namespace: `Industria4.Web.Forms.Components`

Source: `src/Shared/Web.Forms/Components/ObjectRowInput.cs`

## Summary

Blazor row input component that dynamically renders a typed based on the runtime type of the untyped `Value` parameter.

## Properties

### AdditionalAttributes

_property_

```csharp
IReadOnlyDictionary<string,object> AdditionalAttributes
```

Gets or sets whether the field should be rendered inside a form row wrapper. Gets or sets whether the input is disabled. Gets or sets the display label for the field. Gets or sets the help text shown alongside the field. Gets or sets the current untyped value. Raised when the value changes. Gets or sets the expression used to identify the field for validation. Gets or sets additional HTML attributes to pass through to the underlying input element.

## Methods

### BuildRenderTree

_method_

```csharp
void BuildRenderTree(RenderTreeBuilder builder)
```

### BuildRenderTree

_method_

```csharp
void BuildRenderTree<T>(RenderTreeBuilder builder)
```

### OnParametersSet

_method_

```csharp
void OnParametersSet()
```

