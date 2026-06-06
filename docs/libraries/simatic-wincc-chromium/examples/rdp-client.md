---
title: RDP Client
---

# RDP Client

## Scenario

Open a remote desktop session through a Myrtille gateway inside a WinCC screen.

## Source Pattern

`RdpClient` builds the Myrtille URL from `Server`, `Domain`, `Username`, `Password` or `PasswordHash`, optional size and security protocol. `RdpClientForm` shows how the test host recreates the control.

## Steps

1. Configure `MyrtilleServer`.
2. Set the remote `Server`, `Domain` and `Username`.
3. Prefer `PasswordHash` when the gateway supports it.
4. Set `ScreenWidth`, `ScreenHeight` and `Security` when defaults are not appropriate.
5. Validate the connection from the test host before HMI deployment.

## Expected Result

Operators can open a controlled remote session from the HMI panel.
