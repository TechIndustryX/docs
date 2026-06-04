---
title: "TagSelection"
---

# TagSelection

_public class_

Namespace: `Industria4.Web.Forms.Components`

Source: `src/Shared/Web.Forms/Components/TagSelection.razor.cs`

## Summary

Blazor component for selecting a single key-value tag pair, with async key and value search support.

## Properties

### EditMode

_property_

```csharp
bool EditMode
```

Gets or sets whether the component is in edit mode (allowing changes).

### OnDelete

_property_

```csharp
EventCallback OnDelete
```

Raised when the user requests deletion of this tag.

### OnKeys

_property_

```csharp
EventCallback<TagsSelectionKeysEventArgs> OnKeys
```

Raised when the component needs to retrieve the available keys.

### OnValues

_property_

```csharp
EventCallback<TagsSelectionValuesEventArgs> OnValues
```

Raised when the component needs to retrieve the available values for the selected key.

### SelectedTag

_property_

```csharp
TagSelectionItem SelectedTag
```

Gets or sets the currently selected tag.

### SelectedTagChanged

_property_

```csharp
EventCallback<TagSelectionItem> SelectedTagChanged
```

Raised when the selected key-value tag changes.

## Methods

### OnParametersSetAsync

_method_

```csharp
Task OnParametersSetAsync()
```

### RefreshAsync

_method_

```csharp
Task RefreshAsync()
```

Reloads the keys list from the event and refreshes the component.

