---
title: "MesRecipesOptions"
---

# MesRecipesOptions

_public class_

Namespace: `Industria4.Mes.WebApp.Recipes`

Source: `src/Mes/Mes.WebApp.Recipes/MesRecipesOptions.cs`

## Summary

Configuration options for the MES Recipes WebApp integration (recipe requirement, download button, select button).

## Properties

### RequiresRecipe

_property_

```csharp
bool RequiresRecipe
```

Gets or sets a value indicating whether a recipe must be assigned before a work order can start. Defaults to `false`.

### ShowDownloadButton

_property_

```csharp
bool ShowDownloadButton
```

Gets or sets a value indicating whether a download button is shown for assigned recipes. Defaults to `false`.

### ShowSelectButton

_property_

```csharp
bool ShowSelectButton
```

Gets or sets a value indicating whether a select-recipe button is shown on the work-order form. Defaults to `true`.

