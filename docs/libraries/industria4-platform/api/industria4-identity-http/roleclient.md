---
title: "RoleClient"
---

# RoleClient

_public class_

Namespace: `Industria4.Identity.Http`

Source: `src/Identity/Identity.Http/RoleClient.cs`

## Summary

HTTP client for querying and managing roles via the Identity REST API.

## Constructors

### RoleClient

_constructor_

```csharp
RoleClient(RestClient restClient,IOptions<HttpIdentityOptions> options)
```

Initializes a new using the provided REST client and configuration. The underlying REST client. The HTTP Identity options containing the service base URI.

## Methods

### AddOrUpdateAsync

_method_

```csharp
Task AddOrUpdateAsync(AddOrUpdateRoleCommand command,CancellationToken token = default)
```

Creates or updates a role using the provided command. The command carrying the role data. Cancellation token.

### DeleteAsync

_method_

```csharp
Task DeleteAsync(string id,CancellationToken token = default)
```

Deletes the role with the specified identifier. The role identifier. Cancellation token.

