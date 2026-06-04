---
title: "TagsSelectionExtensions"
---

# TagsSelectionExtensions

_public class_

Namespace: `Industria4.Web.Forms.Components`

Source: `src/Shared/Web.Forms/Components/TagSelection.razor.cs`

## Summary

Extension methods for converting between dictionaries and collections.

## Methods

### ToDictionary

_method_

```csharp
IDictionary<string,string> ToDictionary(this IEnumerable<TagSelectionItem> items)
```

Converts a collection of to a string dictionary, ignoring items with blank keys. The source items. A dictionary of non-empty key-value pairs.

### ToTagSelectionItems

_method_

```csharp
TagSelectionItem[] ToTagSelectionItems(this IDictionary<string,string> dictionary)
```

Converts a string dictionary to an array of . The source dictionary. Array of representing each key-value pair.

