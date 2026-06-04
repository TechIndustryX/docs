---
title: "GatewayOptions"
---

# GatewayOptions

_public class_

Namespace: `Industria4.Web.Cqrs`

Source: `src/Shared/Web.Cqrs/GatewayOptions.cs`

## Summary

Configuration options for the CQRS HTTP gateway middleware.

## Properties

### BasePath

_property_

```csharp
PathString BasePath
```

Gets or sets the URL base path at which the gateway is mounted. Defaults to "/".

### CqrsAssemblies

_property_

```csharp
List<Assembly> CqrsAssemblies
```

Gets the assemblies that are scanned for CQRS command and query types to expose through the gateway.

