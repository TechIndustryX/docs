---
title: "WriteRecipeModel"
---

# WriteRecipeModel

_public class_

Namespace: `Industria4.Recipes.Http.Recipe`

Source: `src/Recipes/Recipes.Http/Recipe/WriteRecipeModel.cs`

## Summary

Request model for triggering a recipe write to a device/server.

## Properties

### Metadata

_property_

```csharp
Dictionary<string,object> Metadata
```

Gets or sets optional metadata to attach to the write operation.

### RecipeId

_property_

```csharp
string RecipeId
```

Gets or sets the identifier of the recipe to write (required).

### ServerId

_property_

```csharp
string ServerId
```

Gets or sets the optional identifier of the target server. If omitted, the default server is used.

