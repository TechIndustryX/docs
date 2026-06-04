---
title: "UploadPackageEndpoint"
---

# UploadPackageEndpoint

_public class_

Namespace: `Industria4.Hosting.WebApp.Server.Endpoints`

Source: `src/Hosting/Hosting.WebApp.Server/Endpoints/UploadPackageEndpoint.cs`

## Summary

Registers the HTTP endpoint that accepts package ZIP uploads.

## Methods

### MapUploadPackage

_method_

```csharp
IEndpointRouteBuilder MapUploadPackage(this IEndpointRouteBuilder builder)
```

Maps the `POST /package` endpoint on the given route builder. The endpoint route builder to register on. The same `builder` for chaining.

