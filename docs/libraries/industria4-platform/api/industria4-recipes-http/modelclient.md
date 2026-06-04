---
title: "ModelClient"
---

# ModelClient

_public class_

Namespace: `Industria4.Recipes.Http`

Source: `src/Recipes/Recipes.Http/ModelClient.cs`

## Summary

HTTP client for querying and managing recipe models via the Recipes REST API.

## Constructors

### ModelClient

_constructor_

```csharp
ModelClient(RestClient restClient,IOptions<HttpRecipesOptions> options)
```

Initializes a new . The underlying REST client. Options containing the service base URI.

## Properties

### LanguagesUri

_property_

```csharp
Uri LanguagesUri
```

Gets the URI of the model-languages endpoint.

## Methods

### AddOrUpdateAsync

_method_

```csharp
Task AddOrUpdateAsync(AddOrUpdateModelCommand command,CancellationToken token = default)
```

Creates or updates a model using the provided command.

### DeleteAsync

_method_

```csharp
Task DeleteAsync(string id,CancellationToken token = default)
```

Deletes the model with the specified identifier.

### GetAsync

_method_

```csharp
Task<Model> GetAsync(string id,CancellationToken token = default)
```

Retrieves the full domain model for the given identifier. The model identifier. Cancellation token.

### GetSingleFlattenedModelAsync

_method_

```csharp
Task<Model> GetSingleFlattenedModelAsync(string id,CancellationToken token = default)
```

Retrieves a flattened (fully inherited) version of the domain model for the given identifier. The model identifier. Cancellation token.

