---
title: "WebIdentityOptions"
---

# WebIdentityOptions

_public class_

Namespace: `Industria4.Identity.WebApp`

Source: `src/Identity/Identity.WebApp/WebIdentityOptions.cs`

## Summary

Configuration options for the Identity Blazor WebApp, such as the OIDC provider URI and scopes.

## Properties

### ClientId

_property_

```csharp
string ClientId
```

Gets or sets the OIDC client identifier. Defaults to `"hosting"`.

### Policies

_property_

```csharp
PolicyOptions Policies
```

Gets the policy options for authorization.

### Scopes

_property_

```csharp
List<string> Scopes
```

Gets or sets the OIDC scopes to request.

### Uri

_property_

```csharp
string Uri
```

Gets or sets the authority URI of the Identity Web API (IdentityServer4 endpoint).

