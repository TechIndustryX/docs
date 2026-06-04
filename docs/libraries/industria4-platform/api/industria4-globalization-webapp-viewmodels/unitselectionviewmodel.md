---
title: "UnitSelectionViewModel"
---

# UnitSelectionViewModel

_public class_

Namespace: `Industria4.Globalization.WebApp.ViewModels`

Source: `src/Globalization/Globalization.WebApp/ViewModels/UnitSelectionViewModel.cs`

## Summary

View-model that exposes available unit sets and the currently selected unit set, persisting the selection to local storage.

## Constructors

### UnitSelectionViewModel

_constructor_

```csharp
UnitSelectionViewModel(IUnitContext unitContext,ILocalStorageService localStorageService,ILoadingService loadingService)
```

Initialises a new instance of . The unit context providing available and current unit-set data. Service used to persist the selected unit set across sessions. Service that manages loading-state indicators.

## Properties

### UnitSets

_property_

```csharp
UnitSetRead[] UnitSets
```

Gets the list of available unit sets.

## Methods

### Dispose

_method_

```csharp
void Dispose()
```

Releases the observable tracker subscription.

### LoadAsync

_method_

```csharp
Task LoadAsync()
```

Loads the available unit sets from the unit context and restores the previously selected unit set from local storage. A task that completes when the unit sets are loaded and the selection is restored.

