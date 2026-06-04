---
title: SIMATIC WinCC Chromium
---

# SIMATIC WinCC Chromium API Reference

Source repository: `TechIndustryX/simatic-wincc-chromium`

## .NET API

Detected 8 C# types and 14 members across 2 namespaces.

### `WinCC.Chronium`

#### `ChroniumBrowser`

_public class_

Source: `src/WinCC.Chronium/ChroniumBrowser.cs`

WinForms user control that embeds a WebView2 Chromium browser for use inside WinCC HMI runtime panels. Supports optional session-level browser caching, zoom control, and culture-aware URL construction.

Members:

- `ChroniumBrowser()` _constructor_
- `void OnHandleDestroyed(EventArgs e)` _method_
- `void OnLoad(EventArgs e)` _method_
- `bool CacheEnabled` _property_ — Gets or sets whether the WebView2 browser instance is shared across identical sessions (cache by URL + credentials).
- `int SessionId` _property_ — Gets or sets the session identifier used to isolate WebView2 user-data folders per session.

#### `Hosting`

_public class_

Source: `src/WinCC.Chronium/ChroniumBrowser.cs`

COM-visible host object exposed to the WebView2 page via `chrome.webview.hostObjects.hosting`, providing page-side access to credentials.

Members:

- `Hosting(ChroniumBrowser chroniumBrowser)` _constructor_ — Initializes a new bound to the given browser control.
- `string getPassword()` _method_ — Returns the current password from the browser control.
- `string getUserName()` _method_ — Returns the current username from the browser control.

#### `RdpClient`

_public class_

Source: `src/WinCC.Chronium/RdpClient.cs`

WinForms user control that embeds a WebView2 browser pointed at a Myrtille RDP gateway, providing remote desktop access within a WinCC HMI runtime panel.

Members:

- `RdpClient()` _constructor_
- `void OnHandleDestroyed(EventArgs e)` _method_
- `void OnLoad(EventArgs e)` _method_
- `bool CacheEnabled` _property_ — Gets or sets whether the WebView2 browser instance is shared across identical sessions (cache by URL + credentials).

#### `RdpClientSecurity`

_public enum_

Source: `src/WinCC.Chronium/RdpClient.cs`

#### `WinCCEnvironment`

_internal class_

Source: `src/WinCC.Chronium/WinCCEnvironment.cs`

### `WinCC.Chronium.Test`

#### `BrowserForm`

_public class_

Source: `tests/WinCC.Chronium.Test/BrowserForm.cs`

Members:

- `BrowserForm()` _constructor_

#### `Program`

_internal class_

Source: `tests/WinCC.Chronium.Test/Program.cs`

#### `RdpClientForm`

_public class_

Source: `tests/WinCC.Chronium.Test/RdpClientForm.cs`

Members:

- `RdpClientForm()` _constructor_

