---
title: "WinCC.Chronium"
---

# WinCC.Chronium

This namespace contains 5 public API types.

## Types

- [ChroniumBrowser](./chroniumbrowser.md) _class_ - WinForms user control that embeds a WebView2 Chromium browser for use inside WinCC HMI runtime panels. Supports optional session-level browser caching, zoom control, and culture-aware URL construction.
- [Hosting](./hosting.md) _class_ - COM-visible host object exposed to the WebView2 page via `chrome.webview.hostObjects.hosting`, providing page-side access to credentials.
- [RdpClient](./rdpclient.md) _class_ - WinForms user control that embeds a WebView2 browser pointed at a Myrtille RDP gateway, providing remote desktop access within a WinCC HMI runtime panel.
- [RdpClientSecurity](./rdpclientsecurity.md) _enum_
- [WinCCEnvironment](./winccenvironment.md) _class_
