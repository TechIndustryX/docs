---
title: Embed WebView
---

# Embed WebView

## Scenario

Embed a browser-based operator page in a WinForms panel using `ChroniumBrowser`.

## Complete Example

```csharp title="BrowserForm.cs"
using System.Windows.Forms;
using WinCC.Chronium;

public sealed class BrowserForm : Form
{
    public BrowserForm()
    {
        var browser = new ChroniumBrowser
        {
            // Fill the WinCC/WinForms host panel.
            Dock = DockStyle.Fill,

            // Point to the operator page served by the web/HMI application.
            Url = new Uri("https://hmi.example.local/line-a/press-01"),

            // Session isolates WebView2 user data between operators or panels.
            Session = "line-a-operator",
            UserName = "operator",
            Zoom = 1.0,

            // Shared instances reduce memory when equal URL/session pairs are reused.
            Shared = true
        };

        Controls.Add(browser);
    }
}
```

## Step By Step

1. Drop `ChroniumBrowser` into the WinForms or WinCC host panel.
2. Set `Dock = Fill` for full-panel rendering.
3. Set the target `Url`.
4. Set `Session` to isolate browser user data per operator/session.
5. Set `Shared = true` when equal URL/session combinations can reuse a WebView2 instance.
6. Set `Zoom` only when the HMI layout requires it.

## Validation

Run the test host and confirm the page loads, keeps its session state and resizes with the parent panel.
