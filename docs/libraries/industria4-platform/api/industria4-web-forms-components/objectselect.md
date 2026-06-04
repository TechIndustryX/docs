---
title: "ObjectSelect<T>"
---

# ObjectSelect&lt;T&gt;

_public class_

Namespace: `Industria4.Web.Forms.Components`

Source: `src/Shared/Web.Forms/Components/ObjectSelect.cs`

## Summary

Generic Blazor select input bound to a typed data collection with a customisable item template.

## Properties

### Data

_property_

```csharp
IEnumerable<T> Data
```

Gets or sets the collection of items to display in the select element.

### ItemTemplate

_property_

```csharp
RenderFragment<T> ItemTemplate
```

Gets or sets the render fragment used to render each item.

## Methods

### BuildRenderTree

_method_

```csharp
void BuildRenderTree(RenderTreeBuilder builder)
```

### TryParseValueFromString

_method_

```csharp
bool TryParseValueFromString(string value,out T result,out string validationErrorMessage)
```

Gets or sets a value indicating whether the select element is disabled. Gets or sets the `select` . May be if accessed before the component is rendered.

