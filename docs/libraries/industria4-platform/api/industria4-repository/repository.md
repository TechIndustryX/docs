---
title: "Repository<T>"
---

# Repository&lt;T&gt;

_public class_

Namespace: `Industria4.Repository`

Source: `src/Shared/Repository/Repository.cs`

## Summary

Base implementation of repository which takes care of casting object to a specific type

## Methods

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
Task OnAddAsync(T entity)
```

Adds the object to the repository

### OnExistAsync

_method_

```csharp
Task<bool> OnExistAsync(string id)
```

Gets the object by id from the repository

### OnGetAsync

_method_

```csharp
Task<T> OnGetAsync(string id)
```

Gets the object by id from the repository

### OnRemoveAsync

_method_

```csharp
Task OnRemoveAsync(string id)
```

Removes the object from the repository

### OnUpdateAsync

_method_

```csharp
Task OnUpdateAsync(T entity)
```

Updates the object contained into the repository

### RemoveAsync

_method_

```csharp
Task RemoveAsync(string id)
```

Removes the object from the repository

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

