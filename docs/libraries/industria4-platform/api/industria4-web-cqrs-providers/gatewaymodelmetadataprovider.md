---
title: "GatewayModelMetadataProvider"
---

# GatewayModelMetadataProvider

_public class_

Namespace: `Industria4.Web.Cqrs.Providers`

Source: `src/Shared/Web.Cqrs/Providers/GatewayModelMetadataProvider.cs`

## Summary

MVC model-metadata provider that returns type-level metadata for parameters, bypassing the standard parameter lookup.

## Constructors

### GatewayModelMetadataProvider

_constructor_

```csharp
GatewayModelMetadataProvider(ICompositeMetadataDetailsProvider detailsProvider,IOptions<MvcOptions> optionsAccessor)
```

### GatewayModelMetadataProvider

_constructor_

```csharp
GatewayModelMetadataProvider(ICompositeMetadataDetailsProvider detailsProvider)
```

## Methods

### GetMetadataForParameter

_method_

```csharp
ModelMetadata GetMetadataForParameter(ParameterInfo parameter,Type modelType)
```

