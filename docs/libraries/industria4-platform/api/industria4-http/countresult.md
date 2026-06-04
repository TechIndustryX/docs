---
title: "CountResult<T>"
---

# CountResult&lt;T&gt;

_public class_

Namespace: `Industria4.Http`

Source: `src/Shared/Http/CountResult.cs`

## Summary

Carries a paged result set together with the total item count before paging. The element type.

## Constructors

### CountResult

_constructor_

```csharp
CountResult(IReadOnlyList<T> items,int count)
```

Initializes a new instance with the given items and total count. The page of items. The total number of matching items before paging.

## Properties

### Count

_property_

```csharp
int Count
```

Gets the total count of matching items (before paging).

### Empty

_property_

```csharp
CountResult<T> Empty
```

Gets an empty result with zero items and a count of zero.

### Items

_property_

```csharp
IReadOnlyList<T> Items
```

Gets the current page of items.

