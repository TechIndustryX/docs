---
title: "DynamicPage<TPage, TLayout>"
---

# DynamicPage&lt;TPage, TLayout&gt;

_public class_

Namespace: `Industria4.Web.Forms.Routing`

Source: `src/Shared/Web.Forms/Routing/DynamicPage.cs`

## Summary

Blazor component that renders `TPage` optionally wrapped in a layout of type `TLayout`, forwarding any route parameters. The page component type to render. The layout component type; use `object` to render without a layout.

## Properties

### PageParameters

_property_

```csharp
IReadOnlyDictionary<string,object> PageParameters
```

Gets or sets additional HTML attributes and route parameters to forward to the page component.

## Methods

### BuildRenderTree

_method_

```csharp
void BuildRenderTree(RenderTreeBuilder builder)
```

