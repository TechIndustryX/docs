---
title: "LanguageDictionaryDialogMessage"
---

# LanguageDictionaryDialogMessage

_public class_

Namespace: `Industria4.Web.Forms.Globalization.Services`

Source: `src/Shared/Web.Forms.Globalization/Services/ILanguageDictionaryDialogService.cs`

## Summary

Carries the dictionary value and result callback for a language dictionary dialog request.

## Constructors

### LanguageDictionaryDialogMessage

_constructor_

```csharp
LanguageDictionaryDialogMessage(LanguageDictionary<string> value,Action<bool> callback)
```

Initialises a new message with the value and result callback. The language dictionary being edited. Invoked with `true` when the user confirms changes.

## Properties

### Callback

_property_

```csharp
Action<bool> Callback
```

Gets the callback invoked with the user's confirmation result.

### Value

_property_

```csharp
LanguageDictionary<string> Value
```

Gets the language dictionary being edited.

