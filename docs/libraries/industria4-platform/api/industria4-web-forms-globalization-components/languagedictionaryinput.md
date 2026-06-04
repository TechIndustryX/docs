---
title: "LanguageDictionaryInput"
---

# LanguageDictionaryInput

_public class_

Namespace: `Industria4.Web.Forms.Globalization.Components`

Source: `src/Shared/Web.Forms.Globalization/Components/LanguageDictionaryInput.cs`

## Summary

Blazor input component for editing a value, with an integrated dialog to manage individual language entries.

## Methods

### BuildRenderTree

_method_

```csharp
void BuildRenderTree(RenderTreeBuilder builder)
```

### Dispose

_method_

```csharp
void Dispose()
```

### FormatValueAsString

_method_

```csharp
string FormatValueAsString(LanguageDictionary<string> value)
```

### OnInitialized

_method_

```csharp
void OnInitialized()
```

Gets or sets the component hook used to track parameter sets and disposal. Gets or sets the dialog service used to open the language dictionary editor. Gets or sets a value indicating whether to suppress the input-group wrapper element. Gets or sets a value indicating whether the input is disabled.

### OnParametersSetAsync

_method_

```csharp
Task OnParametersSetAsync()
```

### TryParseValueFromString

_method_

```csharp
bool TryParseValueFromString(string value,out LanguageDictionary<string> result,out string validationErrorMessage)
```

