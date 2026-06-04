---
title: "DeploymentModule"
---

# DeploymentModule

_public class_

Namespace: `Industria4.Production.WebApp.Modules`

Source: `src/Production/Production.WebApp/Modules/DeploymentModule.cs`

## Constructors

### DeploymentModule

_constructor_

```csharp
DeploymentModule(IMenuService menuService,ILanguageContext languageContext,IStringLocalizer<Localization> localizer,AuthenticationStateProvider authenticationStateProvider,IAuthorizationService authorizationService)
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

