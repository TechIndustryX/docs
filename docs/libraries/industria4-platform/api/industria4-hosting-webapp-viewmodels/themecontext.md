---
title: "ThemeContext"
---

# ThemeContext

_public class_

Namespace: `Industria4.Hosting.WebApp.ViewModels`

Source: `src/Hosting/Hosting.WebApp/ViewModels/ThemeContext.cs`

## Summary

Tracks the active UI theme and synchronizes it with the browser via JS interop.

## Constructors

### ThemeContext

_constructor_

```csharp
ThemeContext(IJSRuntime jsRuntime)
```

Initializes a new instance of .

## Properties

### CurrentTheme

_property_

```csharp
string CurrentTheme
```

Gets the name of the currently active theme.

## Methods

### Dispose

_method_

```csharp
void Dispose()
```

### LoadAsync

_method_

```csharp
Task LoadAsync()
```

Initializes the theme from browser storage and registers the JS change callback.

### SetCurrentThemeAsync

_method_

```csharp
Task SetCurrentThemeAsync(string name)
```

Updates the current theme and raises a property-changed notification. The theme name to apply.

### ThemeChanged

_method_

```csharp
Task ThemeChanged(string name)
```

Called by JavaScript when the user changes the theme. The new theme name.

