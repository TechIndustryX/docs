---
title: "CompositionClient"
---

# CompositionClient

_public class_

Namespace: `Industria4.Production.Http`

Source: `src/Production/Production.Http/CompositionClient.cs`

## Summary

HTTP client for querying and managing compositions via the Production REST API.

## Constructors

### CompositionClient

_constructor_

```csharp
CompositionClient(RestClient restClient,IOptions<HttpProductionOptions> options)
```

Initializes a new . The underlying REST client. Options containing the service base URI.

## Methods

### AddOrUpdateAsync

_method_

```csharp
Task AddOrUpdateAsync(AddOrUpdateCompositionCommand command,CancellationToken token = default)
```

Creates or updates a composition using the provided command.

### DeleteAsync

_method_

```csharp
Task DeleteAsync(string id,CancellationToken token = default)
```

Deletes the composition with the specified identifier.

### GetAsync

_method_

```csharp
Task<Composition> GetAsync(string id,CancellationToken token = default)
```

Retrieves the full domain composition for the given identifier.

