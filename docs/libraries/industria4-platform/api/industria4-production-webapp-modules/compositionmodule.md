---
title: "CompositionModule"
---

# CompositionModule

_public class_

Namespace: `Industria4.Production.WebApp.Modules`

Source: `src/Production/Production.WebApp/Modules/CompositionModule.cs`

## Constructors

### CompositionModule

_constructor_

```csharp
CompositionModule(IMenuService menuService,IStringLocalizer<Localization> localizer,ILanguageContext languageContext,AuthenticationStateProvider authenticationStateProvider,IAuthorizationService authorizationService)
```

## Properties

### Loaded

_property_

```csharp
bool Loaded
```

### Name

_property_

```csharp
string Name
```

## Methods

### LoadAsync

_method_

```csharp
Task LoadAsync(CancellationToken cancellationToken)
```

### UnloadAsync

_method_

```csharp
Task UnloadAsync(CancellationToken cancellationToken)
```

