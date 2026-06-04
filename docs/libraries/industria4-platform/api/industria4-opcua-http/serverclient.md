---
title: "ServerClient"
---

# ServerClient

_public class_

Namespace: `Industria4.OpcUa.Http`

Source: `src/OpcUa/OpcUa.Http/ServerClient.cs`

## Summary

HTTP client for OPC-UA server CRUD operations.

## Constructors

### ServerClient

_constructor_

```csharp
ServerClient(RestClient restClient,IOptions<HttpOpcUaOptions> options)
```

Initialises a new using the configured OPC-UA service options.

## Methods

### AddAsync

_method_

```csharp
Task AddAsync(AddOrUpdateServerCommand command,CancellationToken token = default)
```

Creates or updates the server described by the given command.

### DeleteAsync

_method_

```csharp
Task DeleteAsync(string id,CancellationToken token = default)
```

Deletes the server with the given identifier.

### GetAsync

_method_

```csharp
Task<DomainModel.Server.Server> GetAsync(string id,CancellationToken token = default)
```

Returns the full domain model for the server with the given identifier.

