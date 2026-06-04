---
title: "ServerRepository"
---

# ServerRepository

_internal class_

Namespace: `Industria4.OpcUa.EntityFramework.Repositories`

Source: `src/OpcUa/OpcUa.EntityFramework/Repositories/ServerRepository.cs`

## Constructors

### ServerRepository

_constructor_

```csharp
ServerRepository(DataModel.OpcUaContext context,ILogger<ServerRepository> logger)
```

## Methods

### OnAddAsync

_method_

```csharp
Task OnAddAsync(IEnumerable<Industria4.OpcUa.DomainModel.Server.Server> entities)
```

### OnUpdateAsync

_method_

```csharp
Task OnUpdateAsync(IEnumerable<Industria4.OpcUa.DomainModel.Server.Server> entities)
```

### ToDataModel

_method_

```csharp
void ToDataModel(Industria4.OpcUa.DomainModel.Server.Server entity,DataModel.Server.Server dataModel)
```

### ToDomainModel

_method_

```csharp
Industria4.OpcUa.DomainModel.Server.Server ToDomainModel(DataModel.Server.Server dataModel)
```

