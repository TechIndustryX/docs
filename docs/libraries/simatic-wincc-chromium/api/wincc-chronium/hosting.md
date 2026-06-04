---
title: "Hosting"
---

# Hosting

_public class_

Namespace: `WinCC.Chronium`

Source: `src/WinCC.Chronium/ChroniumBrowser.cs`

## Summary

COM-visible host object exposed to the WebView2 page via `chrome.webview.hostObjects.hosting`, providing page-side access to credentials.

## Constructors

### Hosting

_constructor_

```csharp
Hosting(ChroniumBrowser chroniumBrowser)
```

Initializes a new bound to the given browser control.

## Methods

### getPassword

_method_

```csharp
string getPassword()
```

Returns the current password from the browser control.

### getUserName

_method_

```csharp
string getUserName()
```

Returns the current username from the browser control.

