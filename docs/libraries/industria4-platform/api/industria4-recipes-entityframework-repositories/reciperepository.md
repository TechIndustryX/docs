---
title: "RecipeRepository"
---

# RecipeRepository

_internal class_

Namespace: `Industria4.Recipes.EntityFramework.Repositories`

Source: `src/Recipes/Recipes.EntityFramework/Repositories/RecipeRepository.cs`

## Constructors

### RecipeRepository

_constructor_

```csharp
RecipeRepository(DataModel.RecipesContext context,ILogger<RecipeRepository> logger)
```

## Methods

### OnAddAsync

_method_

```csharp
Task OnAddAsync(IEnumerable<DomainModel.Recipe.Recipe> entities)
```

### OnUpdateAsync

_method_

```csharp
Task OnUpdateAsync(IEnumerable<DomainModel.Recipe.Recipe> entities)
```

### RecursiveDelete

_method_

```csharp
void RecursiveDelete(object value,HashSet<object> processed)
```

### ShouldRecursiveDelete

_method_

```csharp
bool ShouldRecursiveDelete(object value)
```

### ToDataModel

_method_

```csharp
void ToDataModel(DomainModel.Recipe.Recipe entity,DataModel.Recipe.Recipe dataModel)
```

### ToDomainModel

_method_

```csharp
DomainModel.Recipe.Recipe ToDomainModel(DataModel.Recipe.Recipe dataModel)
```

