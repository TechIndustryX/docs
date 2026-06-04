---
title: "MenuItem"
---

# MenuItem

_public class_

Namespace: `Industria4.Web.Forms.Services`

Source: `src/Shared/Web.Forms/Services/MenuItem.cs`

## Summary

Represents a single navigation menu entry, supporting link, click, icon, and nested children.

## Constructors

### MenuItem

_constructor_

```csharp
MenuItem(string title,string key)
```

Initialises a new menu item with the given display title and unique key. Display text for the menu item. Unique key identifying this item.

## Properties

### Children

_property_

```csharp
IList<MenuItem> Children
```

Gets the nested child menu items.

### HasChildren

_property_

```csharp
bool HasChildren
```

Gets whether this item has nested child items.

### HasIcon

_property_

```csharp
bool HasIcon
```

Gets whether this item has an icon class.

### IsLink

_property_

```csharp
bool IsLink
```

Gets whether this item navigates to a URL.

### Key

_property_

```csharp
string Key
```

Gets the unique key for this menu item.

### Match

_property_

```csharp
NavLinkMatch Match
```

Gets or sets the NavLink match behaviour for route highlighting.

