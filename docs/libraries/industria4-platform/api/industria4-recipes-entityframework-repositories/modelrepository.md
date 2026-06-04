---
title: "ModelRepository"
---

# ModelRepository

_internal class_

Namespace: `Industria4.Recipes.EntityFramework.Repositories`

Source: `src/Recipes/Recipes.EntityFramework/Repositories/ModelRepository.cs`

## Constructors

### ModelRepository

_constructor_

```csharp
ModelRepository(DataModel.RecipesContext context,ILogger<ModelRepository> logger)
```

## Methods

### OnAddAsync

_method_

```csharp
Task OnAddAsync(IEnumerable<Model> entities)
```

### OnUpdateAsync

_method_

```csharp
Task OnUpdateAsync(IEnumerable<Model> entities)
```

### ToDomainModel

_method_

```csharp
Model ToDomainModel(DataModel.Model.Model dataModel)
```

