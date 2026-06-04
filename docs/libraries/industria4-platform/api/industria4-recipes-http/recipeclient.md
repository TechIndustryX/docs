---
title: "RecipeClient"
---

# RecipeClient

_public class_

Namespace: `Industria4.Recipes.Http`

Source: `src/Recipes/Recipes.Http/RecipeClient.cs`

## Summary

HTTP client for querying and managing recipes via the Recipes REST API.

## Constructors

### RecipeClient

_constructor_

```csharp
RecipeClient(RestClient restClient,IOptions<HttpRecipesOptions> options)
```

Initializes a new . The underlying REST client. Options containing the service base URI.

## Properties

### LanguagesUri

_property_

```csharp
Uri LanguagesUri
```

Gets the URI of the recipe-languages endpoint.

### Uri

_property_

```csharp
Uri Uri
```

Gets or sets the base URI for recipe endpoints.

## Methods

### AddAsync

_method_

```csharp
Task AddAsync(AddRecipeCommand command,CancellationToken token = default)
```

Creates a new recipe.

### CloneAsync

_method_

```csharp
Task CloneAsync(CloneRecipeCommand command,CancellationToken token = default)
```

Clones an existing recipe into a new recipe.

### DeleteAsync

_method_

```csharp
Task DeleteAsync(string id,CancellationToken token = default)
```

Deletes the recipe with the specified identifier.

### GetAsync

_method_

```csharp
Task<DomainModel.Recipe.Recipe> GetAsync(string id,CancellationToken token = default)
```

Retrieves the full domain recipe for the given identifier.

### UpdateAsync

_method_

```csharp
Task UpdateAsync(UpdateRecipeCommand command,CancellationToken token = default)
```

Updates an existing recipe.

### WriteRecipeAsync

_method_

```csharp
Task WriteRecipeAsync(string recipeId,string serverId,CancellationToken token = default)
```

Triggers writing of a recipe to a device/server. The identifier of the recipe to write. The identifier of the target server/device. Cancellation token.

