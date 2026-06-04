---
title: "MvcBuilderExtensions"
---

# MvcBuilderExtensions

_public class_

Namespace: `Microsoft.Extensions.DependencyInjection`

Source: `src/Shared/Web/MvcBuilderExtensions.cs`

## Summary

Extension methods for configuring OData support on an MVC builder.

## Methods

### AddODataSupport

_method_

```csharp
IMvcBuilder AddODataSupport(this IMvcBuilder builder)
```

Configures OData with case-insensitive filter resolution, paging, ordering, and custom filter/order-by binders. The MVC builder to extend. The same for chaining.

