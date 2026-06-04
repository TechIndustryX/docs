---
title: "LanguageRowInput<TItem>"
---

# LanguageRowInput&lt;TItem&gt;

_public class_

Namespace: `Industria4.Web.Forms.Globalization.Components`

Source: `src/Shared/Web.Forms.Globalization/Components/LanguageRowInput.cs`

## Summary

Generic row-input component that resolves its label from resource types and refreshes when the active language changes. The model item type.

## Properties

### LanguageContext

_property_

```csharp
ILanguageContext LanguageContext
```

Gets or sets the injected language context used to detect locale changes.

### StringLocalizerFactory

_property_

```csharp
IStringLocalizerFactory StringLocalizerFactory
```

Gets or sets the injected string localizer factory for resolving resources.

## Methods

### OnInitialized

_method_

```csharp
void OnInitialized()
```

### OnParametersSet

_method_

```csharp
void OnParametersSet()
```

### OpenComponent

_method_

```csharp
void OpenComponent(RenderTreeBuilder builder)
```

