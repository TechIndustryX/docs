---
title: "UnitRepository"
---

# UnitRepository

_internal class_

Namespace: `Industria4.Globalization.EntityFramework.Repositories`

Source: `src/Globalization/Globalization.EntityFramework/Repositories/UnitRepository.cs`

## Constructors

### UnitRepository

_constructor_

```csharp
UnitRepository(DataModel.GlobalizationContext context,ILogger<UnitRepository> logger)
```

## Methods

### OnAddAsync

_method_

```csharp
Task OnAddAsync(IEnumerable<Industria4.Globalization.DomainModel.Units.Unit> entities)
```

### OnUpdateAsync

_method_

```csharp
Task OnUpdateAsync(IEnumerable<Industria4.Globalization.DomainModel.Units.Unit> entities)
```

### ToDataModel

_method_

```csharp
void ToDataModel(Industria4.Globalization.DomainModel.Units.Unit entity,DataModel.Units.Unit dataModel)
```

### ToDomainModel

_method_

```csharp
Industria4.Globalization.DomainModel.Units.Unit ToDomainModel(DataModel.Units.Unit dataModel)
```

