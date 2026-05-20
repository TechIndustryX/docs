---
title: Quickstart
---

# SIMATIC WinCC Chromium Quickstart

Use SIMATIC WinCC Chromium to host Chromium/WebView2-based screens inside a WinCC runtime.

## 1. Prepare the WinCC station

Install or verify Microsoft Edge WebView2 Runtime on the target Windows machine. Use the runtime version approved for the plant image.

## 2. Add the control

Install the delivered WinCC control package, then place the Chromium control on the WinCC screen where the web application or gateway UI must appear.

## 3. Configure navigation

Set the target URL, session isolation and any runtime parameters required by the hosted application. For remote desktop or gateway scenarios, configure the gateway URL and credentials through the approved WinCC configuration mechanism.

## 4. Validate in runtime

Start WinCC Runtime, open the screen and verify that navigation, authentication, focus handling and refresh behavior match the operator workflow.
