---
title: "DynamicRouteBuilder"
---

# DynamicRouteBuilder

_public class_

Namespace: `Industria4.Web.Forms.Routing`

Source: `src/Shared/Web.Forms/Routing/DynamicRouteBuilder.cs`

## Summary

Builds and caches a dynamic whose types wrap registered page components with their route and authorize attributes, enabling runtime routing without static Razor page declarations.

## Constructors

### DynamicRouteBuilder

_constructor_

```csharp
DynamicRouteBuilder(IEnumerable<IDynamicRouteBuilderProvider> providers)
```

Initialises a new instance with the given route type providers. Providers that supply the component types to route.

## Properties

### Assembly

_property_

```csharp
Assembly Assembly
```

Gets the dynamically built assembly, rebuilding it when the registered types change.

## Methods

### Dispose

_method_

```csharp
void Dispose()
```

