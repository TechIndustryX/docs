---
title: "DeploymentRepository"
---

# DeploymentRepository

_internal class_

Namespace: `Industria4.Production.EntityFramework.Repositories`

Source: `src/Production/Production.EntityFramework/Repositories/DeploymentRepository.cs`

## Constructors

### DeploymentRepository

_constructor_

```csharp
DeploymentRepository(DataModel.ProductionContext context,ILogger<DeploymentRepository> logger)
```

## Methods

### OnAddAsync

_method_

```csharp
Task OnAddAsync(IEnumerable<Deployment> entities)
```

### OnUpdateAsync

_method_

```csharp
Task OnUpdateAsync(IEnumerable<Deployment> entities)
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
void ToDataModel(Deployment entity,DataModel.Deployment.Deployment dataModel)
```

### ToDomainModel

_method_

```csharp
Deployment ToDomainModel(DataModel.Deployment.Deployment dataModel)
```

