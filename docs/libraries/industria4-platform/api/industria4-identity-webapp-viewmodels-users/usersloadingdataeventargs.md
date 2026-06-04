---
title: "UsersLoadingDataEventArgs"
---

# UsersLoadingDataEventArgs

_public class_

Namespace: `Industria4.Identity.WebApp.ViewModels.Users`

Source: `src/Identity/Identity.WebApp/ViewModels/Users/UsersViewModel.cs`

## Summary

Event arguments raised by , allowing callers to further refine the user query.

## Constructors

### UsersLoadingDataEventArgs

_constructor_

```csharp
UsersLoadingDataEventArgs(IQueryable<UserRead> query)
```

Initializes a new instance of . The initial user query.

## Properties

### Query

_property_

```csharp
IQueryable<UserRead> Query
```

Gets or sets the queryable user data source that can be further filtered or sorted.

