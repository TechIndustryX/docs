---
title: Test Host
---

# Test Host

## Scenario

Validate browser and RDP behavior on a Windows workstation before installing controls into WinCC.

## Source Pattern

`tests/WinCC.Chronium.Test/Program.cs` starts `BrowserForm`; the test forms instantiate the browser and RDP controls outside the HMI runtime.

## Steps

1. Build the solution on Windows with WebView2 runtime installed.
2. Run the test host.
3. Validate browser navigation, cache/session behavior and zoom.
4. Validate RDP URL generation and Myrtille connectivity.
5. Promote the same property set to the WinCC screen.

## Expected Result

Deployment issues are found before the controls are placed in the production HMI project.

