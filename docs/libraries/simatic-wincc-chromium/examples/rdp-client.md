---
title: RDP Client
---

# RDP Client

## Scenario

Embed a Myrtille RDP session into an HMI panel with `RdpClient`.

## Complete Example

```csharp title="RdpPanel.cs"
using System.Windows.Forms;
using WinCC.Chronium;

public sealed class RdpPanel : UserControl
{
    public RdpPanel()
    {
        var rdp = new RdpClient
        {
            Dock = DockStyle.Fill,
            MyrtilleServer = new Uri("https://rdp-gateway.example.local/"),
            Server = "industrial-pc-01",
            Domain = "PLANT",
            Username = "operator",
            PasswordHash = "<hash from secure configuration>",
            Security = RdpClientSecurity.Auto,
            ScreenWidth = null,
            ScreenHeight = null,
            Zoom = 1.0
        };

        Controls.Add(rdp);
    }
}
```

## Step By Step

1. Deploy and test Myrtille separately.
2. Set `MyrtilleServer` to the gateway base URI.
3. Set target RDP `Server`.
4. Set `Domain` and `Username`.
5. Prefer `PasswordHash` when supported by the gateway.
6. Leave `ScreenWidth` and `ScreenHeight` null for panel-driven sizing.
7. Use `RdpClientSecurity.Auto` unless the gateway requires a specific mode.

## Validation

Run the test host and confirm:

- the Myrtille login URL is reached;
- the RDP session opens;
- resizing the panel does not break the session;
- credentials are not hard-coded in source.
