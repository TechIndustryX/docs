---
title: Runtime Context
---

# Runtime Context

## Scenario

Expose operator context to the embedded page so the web app can show the correct user, plant area or session-specific UI.

## Control Setup

```csharp
var browser = new ChroniumBrowser
{
    Url = new Uri("https://hmi.example.local/dashboard"),
    Session = "press-01-shift-a",
    UserName = currentOperatorName,
    Dock = DockStyle.Fill
};
```

## Page-Side Access

`ChroniumBrowser` exposes a host object named `hosting`. A page can read the runtime user from JavaScript:

```js title="browser-context.js"
async function readWinccContext() {
  const hosting = chrome.webview.hostObjects.hosting;
  const userName = await hosting.getUserName();

  document.querySelector('[data-user]').textContent = userName;
}
```

## Step By Step

1. Set `UserName` from the WinCC/operator context.
2. Set `Session` to a stable identifier for the current HMI session.
3. In the web app, read `chrome.webview.hostObjects.hosting`.
4. Use the context to load operator-specific preferences or permissions.
5. Keep secrets server-side; only expose UI context to the page.

## Validation

Open the page in the test host and verify that the page displays the expected user name.
