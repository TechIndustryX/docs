---
title: Embed WebView
---

# Embed WebView

## Scenario

Embed a web dashboard or internal portal inside a WinCC HMI panel.

## Source Pattern

`ChroniumBrowser` creates a WebView2 control during `OnLoad`, prepares a session-specific user-data folder and navigates to the configured URL.

## Steps

1. Add `ChroniumBrowser` to the WinForms or WinCC-hosted surface.
2. Set `Url` to the page to display.
3. Set `SessionId` when different runtime sessions need isolated browser data.
4. Set `CacheEnabled` according to whether the browser instance can be reused.
5. Set `Zoom` for panel readability.

## Expected Result

The HMI hosts modern web content without leaving the operator runtime.

