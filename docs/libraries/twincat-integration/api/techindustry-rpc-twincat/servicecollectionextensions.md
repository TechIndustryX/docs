---
title: "ServiceCollectionExtensions"
---

# ServiceCollectionExtensions

_public class_

Namespace: `TechIndustry.Rpc.TwinCAT`

Source: `TechIndustry.Rpc.TwinCAT/TechIndustry.Rpc.TwinCAT/ServiceCollectionExtensions.cs`

## Summary

Extension methods for registering TwinCAT RPC services in the dependency-injection container.

## Methods

### AddTwinCATRouter

_method_

```csharp
IServiceCollection AddTwinCATRouter(this IServiceCollection services)
```

Registers the hosted service and the singleton. The service collection to configure.

### AddTwinCATRpc

_method_

```csharp
IServiceCollection AddTwinCATRpc(this IServiceCollection services)
```

Registers the singleton, its hosted service, and the abstraction. The service collection to configure.

