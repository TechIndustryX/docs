---
title: "GatewayApiDescriptionProvider"
---

# GatewayApiDescriptionProvider

_public class_

Namespace: `Industria4.Web.Cqrs.Providers`

Source: `src/Shared/Web.Cqrs/Providers/GatewayApiDescriptionProvider.cs`

## Summary

MVC that generates entries for CQRS gateway actions, enabling Swagger/OpenAPI integration.

## Constructors

### GatewayApiDescriptionProvider

_constructor_

```csharp
GatewayApiDescriptionProvider(IModelMetadataProvider modelMetadataProvider)
```

Initialises a new instance with the given model-metadata provider. Provides model metadata used to describe action parameters.

## Properties

### Order

_property_

```csharp
int Order
```

## Methods

### OnProvidersExecuted

_method_

```csharp
void OnProvidersExecuted(ApiDescriptionProviderContext context)
```

### OnProvidersExecuting

_method_

```csharp
void OnProvidersExecuting(ApiDescriptionProviderContext context)
```

