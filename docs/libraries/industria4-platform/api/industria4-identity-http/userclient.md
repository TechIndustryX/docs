---
title: "UserClient"
---

# UserClient

_public class_

Namespace: `Industria4.Identity.Http`

Source: `src/Identity/Identity.Http/UserClient.cs`

## Summary

HTTP client for querying and managing users via the Identity REST API.

## Constructors

### UserClient

_constructor_

```csharp
UserClient(RestClient restClient,IOptions<HttpIdentityOptions> options)
```

Initializes a new using the provided REST client and configuration. The underlying REST client. The HTTP Identity options containing the service base URI.

## Methods

### AddOrUpdateAsync

_method_

```csharp
Task AddOrUpdateAsync(AddOrUpdateUserCommand command,CancellationToken token = default)
```

Creates or updates a user using the provided command. The command carrying the user data. Cancellation token.

### DeleteAsync

_method_

```csharp
Task DeleteAsync(string id,CancellationToken token = default)
```

Deletes the user with the specified identifier. The user identifier. Cancellation token.

### GetAsync

_method_

```csharp
Task<FullUserRead> GetAsync(string id,CancellationToken token = default)
```

Retrieves the full details (including roles and claims) for a single user. The user identifier. Cancellation token. A or `null` if not found.

