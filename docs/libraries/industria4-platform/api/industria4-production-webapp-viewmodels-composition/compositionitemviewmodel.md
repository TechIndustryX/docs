---
title: "CompositionItemViewModel"
---

# CompositionItemViewModel

_public class_

Namespace: `Industria4.Production.WebApp.ViewModels.Composition`

Source: `src/Production/Production.WebApp/ViewModels/Composition/CompositionItemViewModel.cs`

## Summary

View-model representing a single item within a . The parent composition view-model that owns this item.

## Properties

### CanSelectRecipe

_property_

```csharp
bool CanSelectRecipe
```

Gets a value indicating whether a recipe can be selected (requires a model to be selected first).

### Parent

_property_

```csharp
CompositionViewModel Parent
```

Gets the parent composition view-model that owns this item.

## Methods

### SelectRecipe

_method_

```csharp
Task SelectRecipe()
```

Prompts the user to select a recipe for the currently selected model. A representing the asynchronous operation.

### ToCommand

_method_

```csharp
CompositionItem ToCommand()
```

Converts this view-model into a command object. A populated from the current view-model state.

