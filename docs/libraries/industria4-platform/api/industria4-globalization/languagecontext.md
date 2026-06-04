---
title: "LanguageContext"
---

# LanguageContext

_internal class_

Namespace: `Industria4.Globalization`

Source: `src/Shared/Globalization/LanguageContext.cs`

## Summary

Default implementation of that reads cultures from .

## Constructors

### LanguageContext

_constructor_

```csharp
LanguageContext(IOptions<GlobalizationOptions> options)
```

Initialises the context with the provided options. The globalization options containing the list of enabled cultures.

## Properties

### Cultures

_property_

```csharp
IReadOnlyList<CultureInfo> Cultures
```

### CurrentCulture

_property_

```csharp
CultureInfo CurrentCulture
```

## Methods

### LoadAsync

_method_

```csharp
Task LoadAsync()
```

### SetCurrentCultureAsync

_method_

```csharp
Task SetCurrentCultureAsync(CultureInfo culture)
```

## Events

### PropertyChanged

_event_

```csharp
event PropertyChangedEventHandler PropertyChanged
```

