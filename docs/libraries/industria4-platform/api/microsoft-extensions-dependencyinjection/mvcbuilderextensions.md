---
title: "MvcBuilderExtensions"
---

# MvcBuilderExtensions

_public class_

Namespace: `Microsoft.Extensions.DependencyInjection`

Source: `src/Shared/Web.Cqrs/MvcBuilderExtensions.cs`

## Summary

Extension methods for that register the CQRS gateway infrastructure.

## Methods

### AddCqrsGateway

_method_

```csharp
IMvcBuilder AddCqrsGateway(this IMvcBuilder mvcBuilder,Action<GatewayOptions> options)
```

Adds the CQRS gateway pipeline — auto-discovered controller/action descriptors, model-metadata provider, and API description provider. The MVC builder to configure. Action to configure . The same for chaining.

