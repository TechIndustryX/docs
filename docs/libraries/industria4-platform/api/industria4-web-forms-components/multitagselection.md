---
title: "MultiTagSelection"
---

# MultiTagSelection

_public class_

Namespace: `Industria4.Web.Forms.Components`

Source: `src/Shared/Web.Forms/Components/MultiTagSelection.razor.cs`

## Summary

Blazor component for selecting multiple key-value tag pairs, raising events when the selection changes.

## Properties

### OnKeys

_property_

```csharp
EventCallback<TagsSelectionKeysEventArgs> OnKeys
```

Raised when the user requests keys for the available tags.

### OnValues

_property_

```csharp
EventCallback<TagsSelectionValuesEventArgs> OnValues
```

Raised when the user requests values for a specific key.

### SelectedTagsChanged

_property_

```csharp
EventCallback<TagSelectionItem[]> SelectedTagsChanged
```

Raised when the selected tag array changes.

## Methods

### OnInitialized

_method_

```csharp
void OnInitialized()
```

Gets or sets a value indicating whether the selection is in edit mode.

