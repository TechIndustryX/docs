---
title: "TagsSelectionValuesEventArgs"
---

# TagsSelectionValuesEventArgs

_public class_

Namespace: `Industria4.Web.Forms.Components`

Source: `src/Shared/Web.Forms/Components/TagSelection.razor.cs`

## Summary

Event arguments for the tag-value search event, carrying the selected key, the filter text, and the result values.

## Properties

### Filter

_property_

```csharp
string Filter
```

Gets the filter text used to search for values.

### Key

_property_

```csharp
string? Key
```

Gets the key whose values are being searched.

### Values

_property_

```csharp
IEnumerable<string> Values
```

Gets or sets the matching values returned by the event handler.

