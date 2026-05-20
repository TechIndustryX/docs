---
title: Installation
---

# Installation

Install only the tools required by the component you want to use.

## .NET

For .NET libraries, install a supported .NET SDK in the consuming application environment:

```bash
dotnet --list-sdks
```

TechIndustry libraries currently target .NET 6 and .NET 8 scenarios.

## Containers

For runtime services, install Docker or use the target container platform and pull images from GitHub Container Registry.

## Industrial Tooling

- Beckhoff TwinCAT and TwinCAT HMI for PLC/HMI assets.
- SIMATIC WinCC tooling for WinCC Chromium controls.
- WebView2 Runtime on target SIMATIC WinCC machines.
