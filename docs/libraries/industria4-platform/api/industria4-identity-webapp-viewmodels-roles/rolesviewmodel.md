---
title: "RolesViewModel"
---

# RolesViewModel

_public class_

Namespace: `Industria4.Identity.WebApp.ViewModels.Roles`

Source: `src/Identity/Identity.WebApp/ViewModels/Roles/RolesViewModel.cs`

## Summary

View model for the roles list view, providing grid data, search, and role management operations.

## Properties

### RefreshImplementation

_property_

```csharp
Func<Task> RefreshImplementation
```

## Methods

### DeleteRoleAsync

_method_

```csharp
Task DeleteRoleAsync(RoleRead role)
```

Deletes the specified role after prompting for confirmation. The role to delete.

### NewRoleAsync

_method_

```csharp
Task NewRoleAsync(string name)
```

Creates a new role with the given name and refreshes the grid. The name of the new role.

### RefreshAsync

_method_

```csharp
Task RefreshAsync()
```

Triggers a grid refresh by invoking .

## Events

### Loading

_event_

```csharp
event EventHandler<RolesLoadingDataEventArgs> Loading
```

Raised before role data is loaded, allowing callers to modify the query.

