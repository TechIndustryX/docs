---
title: "HtmlSectionItem"
---

# HtmlSectionItem

_public class_

Namespace: `Industria4.Web.Html`

Source: `src/Shared/Web/Html/IHtmlSectionsProvider.cs`

## Summary

Represents a named, ordered fragment of HTML to render within a named section.

## Constructors

### HtmlSectionItem

_constructor_

```csharp
HtmlSectionItem(string name,RenderContent render,int order)
```

Initialises a new section item with an explicit order. The section name. The rendering delegate. The render order; lower values render first.

### HtmlSectionItem

_constructor_

```csharp
HtmlSectionItem(string name,RenderContent render)
```

Initialises a new section item at order position 0. The section name. The rendering delegate.

## Properties

### Name

_property_

```csharp
string Name
```

Gets the section name this item belongs to.

### Order

_property_

```csharp
int Order
```

Gets or sets the render order; lower values render first.

### Render

_property_

```csharp
RenderContent Render
```

Gets the rendering delegate for this section fragment.

