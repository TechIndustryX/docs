---
title: "WebFormsServiceExtensions"
---

# WebFormsServiceExtensions

_public class_

Namespace: `Microsoft.Extensions.DependencyInjection`

Source: `src/Shared/Web.Forms/WebFormsServiceExtensions.cs`

## Summary

Extension methods for that register the Web.Forms infrastructure.

## Methods

### AddWebForms

_method_

```csharp
IServiceCollection AddWebForms(this IServiceCollection services)
```

Registers all Web.Forms services including observable tracking, component hooks, loading, dialog, menu, sections, and dynamic routing. The service collection to configure. The same for chaining.

