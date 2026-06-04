---
title: "RepositoryTransaction"
---

# RepositoryTransaction

_internal class_

Namespace: `Industria4.EntityFramework.Repository`

Source: `src/Shared/EntityFramework/Repository/RepositoryTransaction.cs`

## Constructors

### RepositoryTransaction

_constructor_

```csharp
RepositoryTransaction(IDbContextTransaction context)
```

Initializes a new instance of .

## Methods

### CommitAsync

_method_

```csharp
Task CommitAsync(CancellationToken token = default)
```

commit async.

### Dispose

_method_

```csharp
void Dispose()
```

dispose.

### RollbackAsync

_method_

```csharp
Task RollbackAsync(CancellationToken token = default)
```

rollback async.

