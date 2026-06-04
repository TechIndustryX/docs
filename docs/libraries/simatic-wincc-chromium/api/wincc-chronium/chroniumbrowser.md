---
title: "ChroniumBrowser"
---

# ChroniumBrowser

_public class_

Namespace: `WinCC.Chronium`

Source: `src/WinCC.Chronium/ChroniumBrowser.cs`

## Summary

WinForms user control that embeds a WebView2 Chromium browser for use inside WinCC HMI runtime panels. Supports optional session-level browser caching, zoom control, and culture-aware URL construction.

## Constructors

### ChroniumBrowser

_constructor_

```csharp
ChroniumBrowser()
```

## Properties

### CacheEnabled

_property_

```csharp
bool CacheEnabled
```

Gets or sets whether the WebView2 browser instance is shared across identical sessions (cache by URL + credentials).

### SessionId

_property_

```csharp
int SessionId
```

Gets or sets the session identifier used to isolate WebView2 user-data folders per session.

## Methods

### OnHandleDestroyed

_method_

```csharp
void OnHandleDestroyed(EventArgs e)
```

### OnLoad

_method_

```csharp
void OnLoad(EventArgs e)
```

