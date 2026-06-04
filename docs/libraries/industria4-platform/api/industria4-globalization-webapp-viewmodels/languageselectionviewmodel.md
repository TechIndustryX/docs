---
title: "LanguageSelectionViewModel"
---

# LanguageSelectionViewModel

_public class_

Namespace: `Industria4.Globalization.WebApp.ViewModels`

Source: `src/Globalization/Globalization.WebApp/ViewModels/LanguageSelectionViewModel.cs`

## Summary

View-model that exposes available cultures and the currently selected culture, navigating the page on culture change.

## Constructors

### LanguageSelectionViewModel

_constructor_

```csharp
LanguageSelectionViewModel(ILanguageContext languageContext,IJSRuntime jsRuntime,NavigationManager navigationManager)
```

Initialises a new instance of . The language context providing available cultures and culture switching. JavaScript runtime used to read and write the culture cookie. Navigation manager used to reload the page after a culture change.

## Properties

### Cultures

_property_

```csharp
CultureInfo[] Cultures
```

Gets the array of cultures available for selection.

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

Loads available cultures from the language context and restores the selected culture from the query string or ASP.NET Core culture cookie. A task that completes when cultures are loaded and the initial culture is resolved.

### SetCurrentCultureAsync

_method_

```csharp
Task SetCurrentCultureAsync(CultureInfo value)
```

Applies `value` as the current UI culture and persists it in the ASP.NET Core culture cookie. The culture to apply. A task that completes when the culture is applied and the cookie is written.

