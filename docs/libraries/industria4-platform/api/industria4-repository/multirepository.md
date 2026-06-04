---
title: "MultiRepository<T>"
---

# MultiRepository&lt;T&gt;

_public class_

Namespace: `Industria4.Repository`

Source: `src/Shared/Repository/MultiRepository.cs`

## Summary

Base implementation of repository which takes care of casting object to a specific type

## Methods

### AddAsync

_method_

```csharp
Task AddAsync(IEnumerable<object> entities)
```

Adds the objects to the repository

### AddAsync

_method_

```csharp
Task AddAsync(IEnumerable<T> entities)
```

Adds the objects to the repository

### AddAsync

_method_

```csharp
Task AddAsync(object entity)
```

Adds the object to the repository

### AddAsync

_method_

```csharp
Task AddAsync(T entity)
```

Adds the object to the repository

### ExistAsync

_method_

```csharp
Task<bool> ExistAsync(string id)
```

Gets the object by id from the repository

### GetAsync

_method_

```csharp
Task<T> GetAsync(string id)
```

Gets the object by id from the repository

### GetObjectAsync

_method_

```csharp
Task<object> GetObjectAsync(string id)
```

Gets the object by id from the repository

### OnAddAsync

_method_

```csharp
Task OnAddAsync(IEnumerable<T> entities)
```

Adds the objects to the repository

### OnRemoveAsync

_method_

```csharp
Task OnRemoveAsync(IEnumerable<string> ids)
```

Removes the objects from the repository

### OnUpdateAsync

_method_

```csharp
Task OnUpdateAsync(IEnumerable<T> entities)
```

Updates the object contained into the repository

### RemoveAsync

_method_

```csharp
Task RemoveAsync(IEnumerable<string> ids)
```

Removes the objects from the repository

### RemoveAsync

_method_

```csharp
Task RemoveAsync(string id)
```

Removes the object from the repository

### UpdateAsync

_method_

```csharp
Task UpdateAsync(IEnumerable<object> entities)
```

Updates the objects contained into the repository

### UpdateAsync

_method_

```csharp
Task UpdateAsync(IEnumerable<T> entities)
```

Updates the objects contained into the repository

### UpdateAsync

_method_

```csharp
Task UpdateAsync(object entity)
```

Updates the object contained into the repository

### UpdateAsync

_method_

```csharp
Task UpdateAsync(T entity)
```

Updates the object contained into the repository

