---
title: "PackageRepository"
---

# PackageRepository

_internal class_

Namespace: `Industria4.Hosting.EntityFramework.Repositories`

Source: `src/Hosting/Hosting.EntityFramework/Repositories/PackageRepository.cs`

## Constructors

### PackageRepository

_constructor_

```csharp
PackageRepository(DataModel.HostingContext context,ILogger<PackageRepository> logger)
```

## Methods

### OnAddAsync

_method_

```csharp
Task OnAddAsync(IEnumerable<Package> entities)
```

### OnRemoveAsync

_method_

```csharp
Task OnRemoveAsync(IEnumerable<string> ids)
```

### OnUpdateAsync

_method_

```csharp
Task OnUpdateAsync(IEnumerable<Package> entities)
```

### ToDataModel

_method_

```csharp
void ToDataModel(Package entity,DataModel.Module.Package dataModel)
```

### ToDomainModel

_method_

```csharp
Package ToDomainModel(DataModel.Module.Package dataModel)
```

