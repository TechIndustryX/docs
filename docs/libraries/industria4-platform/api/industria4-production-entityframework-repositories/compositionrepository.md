---
title: "CompositionRepository"
---

# CompositionRepository

_internal class_

Namespace: `Industria4.Production.EntityFramework.Repositories`

Source: `src/Production/Production.EntityFramework/Repositories/CompositionRepository.cs`

## Constructors

### CompositionRepository

_constructor_

```csharp
CompositionRepository(DataModel.ProductionContext context,ILogger<CompositionRepository> logger)
```

## Methods

### OnAddAsync

_method_

```csharp
Task OnAddAsync(IEnumerable<Composition> entities)
```

### OnUpdateAsync

_method_

```csharp
Task OnUpdateAsync(IEnumerable<Composition> entities)
```

### ToDomainModel

_method_

```csharp
Composition ToDomainModel(DataModel.Composition.Composition dataModel)
```

