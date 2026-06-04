---
title: "AuditLogRepository"
---

# AuditLogRepository

_internal class_

Namespace: `Industria4.Identity.EntityFramework.Repositories`

Source: `src/Identity/Identity.EntityFramework/Repositories/AuditLogRepository.cs`

## Constructors

### AuditLogRepository

_constructor_

```csharp
AuditLogRepository(DataModel.IdentityContext context,ILogger<AuditLogRepository> logger)
```

## Methods

### OnAddAsync

_method_

```csharp
Task OnAddAsync(IEnumerable<AuditLog> entities)
```

### OnUpdateAsync

_method_

```csharp
Task OnUpdateAsync(IEnumerable<AuditLog> entities)
```

### ToDataModel

_method_

```csharp
void ToDataModel(AuditLog entity,DataModel.AuditLog dataModel)
```

### ToDomainModel

_method_

```csharp
AuditLog ToDomainModel(DataModel.AuditLog dataModel)
```

