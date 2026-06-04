---
title: "LanguageMenuItem"
---

# LanguageMenuItem

_public class_

Namespace: `Industria4.Web.Forms.Globalization.Services`

Source: `src/Shared/Web.Forms.Globalization/Services/LanguageMenuItem.cs`

## Summary

A whose is automatically refreshed when the active language changes.

## Constructors

### LanguageMenuItem

_constructor_

```csharp
LanguageMenuItem(ILanguageContext languageContext,string key,IStringLocalizer localizer)
```

Initialises a new language-aware menu item. The language context whose changes trigger a title refresh. The resource key (also used as the menu item key). The string localizer used to resolve the title.

## Methods

### Dispose

_method_

```csharp
void Dispose()
```

