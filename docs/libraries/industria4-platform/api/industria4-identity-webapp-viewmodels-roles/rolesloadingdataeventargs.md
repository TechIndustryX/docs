---
title: "RolesLoadingDataEventArgs"
---

# RolesLoadingDataEventArgs

_public class_

Namespace: `Industria4.Identity.WebApp.ViewModels.Roles`

Source: `src/Identity/Identity.WebApp/ViewModels/Roles/RolesViewModel.cs`

## Summary

Event arguments raised by , allowing callers to further refine the role query.

## Constructors

### RolesLoadingDataEventArgs

_constructor_

```csharp
RolesLoadingDataEventArgs(IQueryable<RoleRead> query)
```

Initializes a new instance of . The initial role query.

## Properties

### Query

_property_

```csharp
IQueryable<RoleRead> Query
```

Gets or sets the queryable role data source that can be further filtered or sorted.

