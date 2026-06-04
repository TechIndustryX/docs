---
title: "UserViewModel"
---

# UserViewModel

_public class_

Namespace: `Industria4.Identity.WebApp.ViewModels.Users`

Source: `src/Identity/Identity.WebApp/ViewModels/Users/UserViewModel.cs`

## Summary

View model for the user create/edit form, managing user data, roles, and persistence operations.

## Constructors

### UserViewModel

_constructor_

```csharp
UserViewModel(IServiceProvider serviceProvider)
```

Initializes a new instance of . The DI service provider used to resolve dependencies on demand.

## Properties

### AvailableRoles

_property_

```csharp
ObservableCollection<string> AvailableRoles
```

Gets the collection of all available role names that can be assigned to this user.

### HasChanges

_property_

```csharp
bool HasChanges
```

Gets or sets a value indicating whether any property of the view model has changed since the last save.

### IsNew

_property_

```csharp
bool IsNew
```

Gets or sets a value indicating whether this is a new (unsaved) user.

### Roles

_property_

```csharp
ObservableCollection<RoleViewModel> Roles
```

Gets the collection of role assignments for this user.

## Methods

### AddRole

_method_

```csharp
void AddRole()
```

Adds a new, empty role assignment slot to the user's role list.

### DeleteAsync

_method_

```csharp
Task DeleteAsync()
```

Prompts for confirmation and then deletes the current user.

### LoadAsync

_method_

```csharp
Task LoadAsync(string id)
```

Loads user data and available roles for the given user identifier. The user identifier, or / empty to initialise a new user.

### RaisePropertyChanged

_method_

```csharp
void RaisePropertyChanged(string propertyName = null)
```

Marks the view model as dirty whenever any bindable property changes, so the UI can reflect unsaved state.

### RemoveRole

_method_

```csharp
void RemoveRole(RoleViewModel role)
```

Removes the specified role from the user's role list. The role view model to remove.

### SaveAsync

_method_

```csharp
Task SaveAsync()
```

Persists the user to the server, then navigates or reloads accordingly.

