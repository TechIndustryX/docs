---
title: "GatewayActionDescriptorProvider"
---

# GatewayActionDescriptorProvider

_public class_

Namespace: `Industria4.Web.Cqrs.Providers`

Source: `src/Shared/Web.Cqrs/Providers/GatewayActionDescriptorProvider.cs`

## Summary

MVC that synthesises controller action descriptors for each CQRS command discovered via .

## Properties

### Order

_property_

```csharp
int Order
```

Gets the provider execution order. A lower value runs first.

## Methods

### OnProvidersExecuted

_method_

```csharp
void OnProvidersExecuted(ActionDescriptorProviderContext context)
```

### OnProvidersExecuting

_method_

```csharp
void OnProvidersExecuting(ActionDescriptorProviderContext context)
```

