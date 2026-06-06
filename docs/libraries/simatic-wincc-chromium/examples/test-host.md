---
title: Test Host
---

# Test Host

## Scenario

Validate `ChroniumBrowser` and `RdpClient` behavior in a normal WinForms test application before installing them in the HMI runtime.

## Test Form Pattern

```csharp title="Program.cs"
using System.Windows.Forms;

Application.EnableVisualStyles();
Application.SetCompatibleTextRenderingDefault(false);
Application.Run(new BrowserForm());
```

```csharp title="BrowserForm.cs"
public sealed class BrowserForm : Form
{
    public BrowserForm()
    {
        var split = new SplitContainer { Dock = DockStyle.Fill };
        split.Panel1.Controls.Add(new ChroniumBrowser
        {
            Dock = DockStyle.Fill,
            Url = new Uri("https://hmi.example.local/overview"),
            UserName = "test-operator"
        });
        split.Panel2.Controls.Add(new RdpClient
        {
            Dock = DockStyle.Fill,
            MyrtilleServer = new Uri("https://rdp-gateway.example.local/"),
            Server = "industrial-pc-01",
            Username = "operator"
        });
        Controls.Add(split);
    }
}
```

## Step By Step

1. Create a small WinForms test project.
2. Add one form for browser tests and one for RDP tests.
3. Use non-production URLs and credentials.
4. Test resize, reload, session reuse and disposal.
5. Recreate controls at runtime to detect cleanup issues.
6. Only then move settings to the HMI project.

## Validation

The test host should start without WinCC and prove that WebView2 runtime, gateway connectivity and sizing behave correctly.
