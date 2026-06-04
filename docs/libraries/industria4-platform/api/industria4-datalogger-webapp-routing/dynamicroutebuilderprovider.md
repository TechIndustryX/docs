---
title: "DynamicRouteBuilderProvider"
---

# DynamicRouteBuilderProvider

_public class_

Namespace: `Industria4.DataLogger.WebApp.Routing`

Source: `src/DataLogger/DataLogger.WebApp/Routing/DynamicRouteBuilderProvider.cs`

## Summary

Dynamic route builder provider that registers the DataLogger Blazor view when the module is loaded.

## Constructors

### DynamicRouteBuilderProvider

_constructor_

```csharp
DynamicRouteBuilderProvider(DataLoggerModule module)
```

Initializes a new . The DataLogger module used to check whether routes should be registered.

## Methods

### GetTypes

_method_

```csharp
IEnumerable<Type> GetTypes()
```

