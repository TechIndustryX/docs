---
title: "ServicesExtensions"
---

# ServicesExtensions

_public class_

Namespace: `Microsoft.Extensions.DependencyInjection`

Source: `src/OpcUa/OpcUa.Comunication/ServicesExtensions.cs`

## Summary

Extension methods for registering OPC-UA communication services.

## Methods

### AddOpcUa

_method_

```csharp
IServiceCollection AddOpcUa(this IServiceCollection services)
```

Registers the singleton.

### AddOpcUaMiddleware

_method_

```csharp
IServiceCollection AddOpcUaMiddleware<T>(this IServiceCollection services)
```

Registers `T` as an singleton.

