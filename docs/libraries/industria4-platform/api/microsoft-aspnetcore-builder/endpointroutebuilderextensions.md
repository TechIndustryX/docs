---
title: "EndpointRouteBuilderExtensions"
---

# EndpointRouteBuilderExtensions

_public class_

Namespace: `Microsoft.AspNetCore.Builder`

Source: `src/Hosting/Hosting.Startup/EndpointRouteBuilderExtensions.cs`

## Summary

Extension methods for mapping hosting-specific endpoints to an .

## Methods

### MapAssemblies

_method_

```csharp
IEndpointRouteBuilder MapAssemblies(this IEndpointRouteBuilder builder)
```

Maps the `/_hosting/assemblies.json` endpoint that returns a hash map of all available assembly files. The endpoint route builder to add the route to. The same `builder` instance for chaining.

### MapCatalogs

_method_

```csharp
IEndpointRouteBuilder MapCatalogs(this IEndpointRouteBuilder builder)
```

Maps the `/_hosting/catalogs.json` endpoint that returns the list of client assembly names from all catalogs. The endpoint route builder to add the route to. The same `builder` instance for chaining.

