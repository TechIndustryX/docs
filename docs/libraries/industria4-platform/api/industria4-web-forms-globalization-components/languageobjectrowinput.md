---
title: "LanguageObjectRowInput"
---

# LanguageObjectRowInput

_public class_

Namespace: `Industria4.Web.Forms.Globalization.Components`

Source: `src/Shared/Web.Forms.Globalization/Components/LanguageObjectRowInput.cs`

## Summary

Row-input component that automatically resolves its label from resource types and refreshes when the active language changes.

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

### BuildRenderTree

_method_

```csharp
void BuildRenderTree(RenderTreeBuilder builder)
```

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

