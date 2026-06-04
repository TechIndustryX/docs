---
title: "TagsSelectionKeysEventArgs"
---

# TagsSelectionKeysEventArgs

_public class_

Namespace: `Industria4.Web.Forms.Components`

Source: `src/Shared/Web.Forms/Components/TagSelection.razor.cs`

## Summary

Event arguments for the tag-key search event, carrying the triggering tag item, the filter text, and the result keys.

## Properties

### Filter

_property_

```csharp
string Filter
```

Gets the filter text used to search for keys.

### Keys

_property_

```csharp
IEnumerable<string> Keys
```

Gets or sets the matching key values returned by the event handler.

### TagSelectionItem

_property_

```csharp
TagSelectionItem TagSelectionItem
```

Gets the tag selection item that triggered the key search.

