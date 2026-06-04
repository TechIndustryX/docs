---
title: "UnitSetRepository"
---

# UnitSetRepository

_internal class_

Namespace: `Industria4.Globalization.EntityFramework.Repositories`

Source: `src/Globalization/Globalization.EntityFramework/Repositories/UnitSetRepository.cs`

## Constructors

### UnitSetRepository

_constructor_

```csharp
UnitSetRepository(DataModel.GlobalizationContext context,ILogger<UnitSetRepository> logger)
```

## Methods

### OnAddAsync

_method_

```csharp
Task OnAddAsync(IEnumerable<Industria4.Globalization.DomainModel.Units.UnitSet> entities)
```

### OnUpdateAsync

_method_

```csharp
Task OnUpdateAsync(IEnumerable<Industria4.Globalization.DomainModel.Units.UnitSet> entities)
```

### ToDataModel

_method_

```csharp
void ToDataModel(Industria4.Globalization.DomainModel.Units.UnitSet entity,DataModel.Units.UnitSet dataModel)
```

### ToDomainModel

_method_

```csharp
Industria4.Globalization.DomainModel.Units.UnitSet ToDomainModel(DataModel.Units.UnitSet dataModel)
```

