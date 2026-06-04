---
title: "LanguagesImportDialogMessage"
---

# LanguagesImportDialogMessage

_public class_

Namespace: `Industria4.Web.Forms.Globalization.Services`

Source: `src/Shared/Web.Forms.Globalization/Services/ILanguagesImportDialogService.cs`

## Summary

Carries the import URI and result callback for a language import dialog request.

## Constructors

### LanguagesImportDialogMessage

_constructor_

```csharp
LanguagesImportDialogMessage(string importUri,Action<bool> callback)
```

Initialises a new message with the import URI and result callback. The URI to which the language file is uploaded. Invoked with `true` when the user confirms the import.

## Properties

### Callback

_property_

```csharp
Action<bool> Callback
```

Gets the callback invoked with the user's confirmation result.

### ImportUri

_property_

```csharp
string ImportUri
```

Gets the import endpoint URI.

