---
title: "DeploymentViewModelBase"
---

# DeploymentViewModelBase

_public class_

Namespace: `Industria4.Production.WebApp.ViewModels.Deployment`

Source: `src/Production/Production.WebApp/ViewModels/Deployment/DeploymentViewModelBase.cs`

## Summary

Base view model for deployment create/edit operations, providing shared tag-lookup helpers.

## Constructors

### DeploymentViewModelBase

_constructor_

```csharp
DeploymentViewModelBase(IServiceProvider serviceProvider)
```

Initializes a new . The DI service provider used to resolve dependencies.

## Properties

### LanguageContext

_property_

```csharp
ILanguageContext LanguageContext
```

Gets the current UI language context.

### ServiceProvider

_property_

```csharp
IServiceProvider ServiceProvider
```

Gets the DI service provider.

## Methods

### GetTagsKeyAsync

_method_

```csharp
Task GetTagsKeyAsync(TagsSelectionKeysEventArgs arg)
```

Populates the available tag keys matching the given filter string. Event arguments carrying the filter text and receiving the matching keys.

### GetTagValuesAsync

_method_

```csharp
Task GetTagValuesAsync(TagsSelectionValuesEventArgs arg)
```

Populates the available tag values for the given key and filter string. Event arguments carrying the tag key, filter text, and receiving the matching values.

