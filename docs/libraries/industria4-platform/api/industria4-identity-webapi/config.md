---
title: "Config"
---

# Config

_public class_

Namespace: `Industria4.Identity.WebApi`

Source: `src/Identity/Identity.WebApi/Config.cs`

## Summary

Static configuration factory for IdentityServer4 resources and clients.

## Properties

### Apis

_property_

```csharp
IEnumerable<ApiResource> Apis
```

Gets the registered API resources.

### Ids

_property_

```csharp
IEnumerable<IdentityResource> Ids
```

Gets the supported identity resources (OpenID and profile).

## Methods

### GetClients

_method_

```csharp
IEnumerable<Client> GetClients(IConfiguration configuration,ApiIdentityOptions options)
```

Builds the list of IdentityServer4 clients from configuration and options. The application configuration. The identity API options containing additional client definitions. An enumerable of configured instances.

