---
title: "ModelModule"
---

# ModelModule

_public class_

Namespace: `Industria4.Recipes.WebApp.Modules`

Source: `src/Recipes/Recipes.WebApp/Modules/ModelModule.cs`

## Summary

Represents model module.

## Constructors

### ModelModule

_constructor_

```csharp
ModelModule(IMenuService menuService,IStringLocalizer<Localization> localizer,ILanguageContext languageContext,AuthenticationStateProvider authenticationStateProvider,IAuthorizationService authorizationService)
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

