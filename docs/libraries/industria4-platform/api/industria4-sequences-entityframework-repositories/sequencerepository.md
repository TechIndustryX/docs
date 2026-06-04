---
title: "SequenceRepository"
---

# SequenceRepository

_internal class_

Namespace: `Industria4.Sequences.EntityFramework.Repositories`

Source: `src/Sequences/Sequences.EntityFramework/Repositories/SequenceRepository.cs`

## Constructors

### SequenceRepository

_constructor_

```csharp
SequenceRepository(SequencesContext context,ILogger<SequenceRepository> logger)
```

## Methods

### OnAddAsync

_method_

```csharp
Task OnAddAsync(IEnumerable<DomainModel.Sequence> entities)
```

### OnUpdateAsync

_method_

```csharp
Task OnUpdateAsync(IEnumerable<DomainModel.Sequence> entities)
```

### ToDataModel

_method_

```csharp
void ToDataModel(DomainModel.Sequence entity,Sequence dataModel)
```

### ToDomainModel

_method_

```csharp
DomainModel.Sequence ToDomainModel(Sequence dataModel)
```

