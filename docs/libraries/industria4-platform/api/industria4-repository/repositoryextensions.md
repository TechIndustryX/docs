---
title: "RepositoryExtensions"
---

# RepositoryExtensions

_public class_

Namespace: `Industria4.Repository`

Source: `src/Shared/Repository/RepositoryExtensions.cs`

## Summary

Extension methods for and its typed variants.

## Methods

### AddSafetyAsync

_method_

```csharp
Task AddSafetyAsync<T>(this IRepository<T> repository,T item)
```

Adds or updates the entity based on the id

### AsTransactional

_method_

```csharp
ITransactionalRepository AsTransactional(this IRepository repository)
```

Casts the repository to , throwing if it does not support transactions. The repository to cast. The same repository as .

### ReplaceAsync

_method_

```csharp
Task ReplaceAsync<T>(this IRepository<T> repository,T item)
```

Replaces the entity identified by `item`.Id with the given item, removing the previous version first. The entity type. The repository to operate on. The new entity value.

