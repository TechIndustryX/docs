---
title: "RecipeModule"
---

# RecipeModule

_public class_

Namespace: `Industria4.Recipes.WebApp.Modules`

Source: `src/Recipes/Recipes.WebApp/Modules/RecipeModule.cs`

## Summary

Represents recipe module.

## Constructors

### RecipeModule

_constructor_

```csharp
RecipeModule(IMenuService menuService,ILanguageContext languageContext,IStringLocalizer<Localization> localizer,AuthenticationStateProvider authenticationStateProvider,IAuthorizationService authorizationService)
```

Initializes a new instance of .

## Properties

### Loaded

_property_

```csharp
bool Loaded
```

Gets or sets loaded.

### Name

_property_

```csharp
string Name
```

Gets name.

## Methods

### LoadAsync

_method_

```csharp
Task LoadAsync(CancellationToken cancellationToken)
```

load async.

### UnloadAsync

_method_

```csharp
Task UnloadAsync(CancellationToken cancellationToken)
```

unload async.

