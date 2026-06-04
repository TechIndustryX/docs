---
title: "CqrsDiscovery"
---

# CqrsDiscovery

_public class_

Namespace: `Industria4.Web.Cqrs.Providers`

Source: `src/Shared/Web.Cqrs/Providers/CqrsDiscovery.cs`

## Summary

Service that discovers all types in the configured CQRS assemblies and maps them to controller/action/path tuples for the gateway.

## Constructors

### CqrsDiscovery

_constructor_

```csharp
CqrsDiscovery(IOptions<GatewayOptions> options)
```

Initialises a new instance and prepares the command-to-route mapping. Gateway options supplying the assemblies to scan.

## Methods

### GetAll

_method_

```csharp
IEnumerable<(Type type,string controller,string action,string path)> GetAll()
```

Returns all discovered command mappings as `(type, controller, action, path)` tuples. An enumerable of tuples describing each command and its gateway route.

