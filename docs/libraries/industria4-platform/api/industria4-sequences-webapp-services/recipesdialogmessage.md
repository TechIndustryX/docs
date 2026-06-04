---
title: "RecipesDialogMessage"
---

# RecipesDialogMessage

_public class_

Namespace: `Industria4.Sequences.WebApp.Services`

Source: `src/Sequences/Sequences.WebApp/Services/IRecipesDialogService.cs`

## Summary

Message passed to subscribers of to communicate the result callback.

## Constructors

### RecipesDialogMessage

_constructor_

```csharp
RecipesDialogMessage(Action<RecipeRead> callback)
```

Initializes a new instance of . The action to invoke with the selected recipe when the dialog closes.

## Properties

### Callback

_property_

```csharp
Action<RecipeRead> Callback
```

Gets the callback to invoke with the recipe selected by the user.

