---
title: "HostingOptions"
---

# HostingOptions

_public class_

Namespace: `Industria4.Hosting.WebApp`

Source: `src/Hosting/Hosting.WebApp/HostingOptions.cs`

## Summary

Configuration options for the Industria4 hosting web application.

## Properties

### CollapsedMenu

_property_

```csharp
bool CollapsedMenu
```

Gets or sets a value indicating whether the navigation menu should start collapsed.

### MenuOrder

_property_

```csharp
Dictionary<string,int> MenuOrder
```

Gets or sets a dictionary of menu item names to their display order.

### StartProcess

_property_

```csharp
string StartProcess
```

Gets or sets the name of an external process to launch on startup.

### StartProcessArguments

_property_

```csharp
string StartProcessArguments
```

Gets or sets the command-line arguments passed to the startup process.

### StartProcessDelay

_property_

```csharp
TimeSpan? StartProcessDelay
```

Gets or sets how long to wait before launching the startup process.

### StartUri

_property_

```csharp
Uri StartUri
```

Gets or sets the URI to navigate to on startup, or to use the default route.

### VirtualKeyboard

_property_

```csharp
bool VirtualKeyboard
```

Gets or sets a value indicating whether a virtual keyboard should be displayed. Defaults to .

