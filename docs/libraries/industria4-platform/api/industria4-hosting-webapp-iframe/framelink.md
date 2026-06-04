---
title: "FrameLink"
---

# FrameLink

_public class_

Namespace: `Industria4.Hosting.WebApp.IFrame`

Source: `src/Hosting/Hosting.WebApp.IFrame/FrameOptions.cs`

## Summary

Defines a single external link displayed as an IFrame panel in the hosting web app.

## Properties

### Bottom

_property_

```csharp
bool Bottom
```

Gets or sets a value indicating whether the link should appear at the bottom of the menu.

### Data

_property_

```csharp
IDictionary<string,string> Data
```

Gets additional data key-value pairs passed to the IFrame view.

### Icon

_property_

```csharp
string Icon
```

Gets or sets the icon name or CSS class for the navigation entry.

### Order

_property_

```csharp
int Order
```

Gets or sets the display order of this link in the navigation menu.

### Scrolling

_property_

```csharp
bool Scrolling
```

Gets or sets a value indicating whether the IFrame should have scroll bars. Defaults to .

### Uri

_property_

```csharp
string Uri
```

Gets or sets the URI of the page to embed in the IFrame.

