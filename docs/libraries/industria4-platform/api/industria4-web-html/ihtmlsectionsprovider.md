---
title: "IHtmlSectionsProvider"
---

# IHtmlSectionsProvider

_public interface_

Namespace: `Industria4.Web.Html`

Source: `src/Shared/Web/Html/IHtmlSectionsProvider.cs`

## Summary

Provides a collection of HTML section items to inject into Razor views.

## Methods

### RenderContent

_method_

```csharp
delegate Task RenderContent(IHtmlHelper helper)
```

Delegate for rendering HTML content into a Razor view helper. The current HTML helper.

