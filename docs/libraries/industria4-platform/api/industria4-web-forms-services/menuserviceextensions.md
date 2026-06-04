---
title: "MenuServiceExtensions"
---

# MenuServiceExtensions

_public class_

Namespace: `Industria4.Web.Forms.Services`

Source: `src/Shared/Web.Forms/Services/MenuServiceExtensions.cs`

## Summary

Extension methods for removing entries from navigation lists.

## Methods

### Remove

_method_

```csharp
void Remove(this IList<MenuItem> items,string href)
```

Removes all items whose matches the given path. The menu list to modify. The href string to match.

### Remove

_method_

```csharp
void Remove(this IList<MenuItem> items,Type hrefType)
```

Removes all items whose matches the given type. The menu list to modify. The page component type to remove.

