---
title: "DataLoggerModule"
---

# DataLoggerModule

_public class_

Namespace: `Industria4.DataLogger.WebApp.Modules`

Source: `src/DataLogger/DataLogger.WebApp/Modules/DataLoggerModule.cs`

## Summary

Client module that registers the DataLogger navigation menu entries when the user is authorized.

## Constructors

### DataLoggerModule

_constructor_

```csharp
DataLoggerModule(IMenuService menuService,IOptions<DataLoggerOptions> options,IStringLocalizer<Localization> localizer,ILanguageContext languageContext,AuthenticationStateProvider authenticationStateProvider,IAuthorizationService authorizationService)
```

Initializes a new .

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

