---
title: "RecipesContext"
---

# RecipesContext

_internal class_

Namespace: `Industria4.Recipes.EntityFramework.DataModel`

Source: `src/Recipes/Recipes.EntityFramework/DataModel/RecipesContext.cs`

## Constructors

### RecipesContext

_constructor_

```csharp
RecipesContext(DbContextOptions<RecipesContext> options)
```

## Properties

### Models

_property_

```csharp
DbSet<Model.Model> Models
```

### Recipes

_property_

```csharp
DbSet<Recipe.Recipe> Recipes
```

## Methods

### OnModelCreating

_method_

```csharp
void OnModelCreating(ModelBuilder modelBuilder)
```

