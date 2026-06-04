---
title: "CompositionViewModelBase"
---

# CompositionViewModelBase

_public class_

Namespace: `Industria4.Production.WebApp.ViewModels.Composition`

Source: `src/Production/Production.WebApp/ViewModels/Composition/CompositionViewModelBase.cs`

## Summary

Abstract base view-model shared by composition list and edit screens, providing tag-lookup helpers.

## Constructors

### CompositionViewModelBase

_constructor_

```csharp
CompositionViewModelBase(IServiceProvider serviceProvider)
```

Initialises a new instance of . The application service provider used to resolve dependencies.

## Properties

### LanguageContext

_property_

```csharp
ILanguageContext LanguageContext
```

Gets the active language context used for localisation.

### ServiceProvider

_property_

```csharp
IServiceProvider ServiceProvider
```

Gets the application service provider.

## Methods

### GetTagsKeyAsync

_method_

```csharp
Task GetTagsKeyAsync(TagsSelectionKeysEventArgs arg)
```

Populates the available tag keys for the tag-selection component. The event arguments containing the current filter text and the list to populate. A representing the asynchronous operation.

### GetTagValuesAsync

_method_

```csharp
Task GetTagValuesAsync(TagsSelectionValuesEventArgs arg)
```

Populates the available tag values for a given tag key in the tag-selection component. The event arguments containing the key, the current filter text, and the list to populate. A representing the asynchronous operation.

