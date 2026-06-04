---
title: "UsersViewModel"
---

# UsersViewModel

_public class_

Namespace: `Industria4.Identity.WebApp.ViewModels.Users`

Source: `src/Identity/Identity.WebApp/ViewModels/Users/UsersViewModel.cs`

## Summary

View model for the users list view, providing grid data, search, and navigation operations.

## Properties

### RefreshImplementation

_property_

```csharp
Func<Task> RefreshImplementation
```

## Methods

### NewUserAsync

_method_

```csharp
Task NewUserAsync()
```

Navigates to the new-user creation page.

### RefreshAsync

_method_

```csharp
Task RefreshAsync()
```

Triggers a grid refresh by invoking .

### SelectUser

_method_

```csharp
void SelectUser(UserRead user)
```

Selects a user and navigates to edit view

## Events

### Loading

_event_

```csharp
event EventHandler<UsersLoadingDataEventArgs> Loading
```

Raised before user data is loaded, allowing callers to modify the query.

