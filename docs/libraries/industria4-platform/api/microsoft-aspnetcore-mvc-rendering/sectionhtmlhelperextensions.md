---
title: "SectionHtmlHelperExtensions"
---

# SectionHtmlHelperExtensions

_public class_

Namespace: `Microsoft.AspNetCore.Mvc.Rendering`

Source: `src/Shared/Web/Html/SectionHtmlHelperExtensions.cs`

## Summary

Extension methods for rendering named HTML sections via registered services.

## Methods

### RenderSectionAsync

_method_

```csharp
Task RenderSectionAsync(this IHtmlHelper helper,string name)
```

Renders all section items registered under the given `name`, in order. The HTML helper to render into. The section name to render.

