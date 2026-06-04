---
title: "ProductionDynamicRouteBuilderProvider"
---

# ProductionDynamicRouteBuilderProvider

_public class_

Namespace: `Industria4.Production.WebApp.Routing`

Source: `src/Production/Production.WebApp/Routing/DynamicRouteBuilderProvider.cs`

## Summary

Provides the Blazor route types for Production views based on which modules are currently loaded.

## Constructors

### ProductionDynamicRouteBuilderProvider

_constructor_

```csharp
ProductionDynamicRouteBuilderProvider(DeploymentModule deploymentModule,CompositionModule compositionModule)
```

Initializes a new . The deployment module used to check if deployment routes should be registered. The composition module used to check if composition routes should be registered.

## Methods

### GetTypes

_method_

```csharp
IEnumerable<Type> GetTypes()
```

