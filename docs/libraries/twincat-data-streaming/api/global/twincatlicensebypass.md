---
title: "TwinCatLicenseBypass"
---

# TwinCatLicenseBypass

_public class_

Namespace: `(global)`

Source: `TechIndustry.Streaming.TwinCAT/Program.cs`

## Summary

Reflection-based workaround that bypasses the TwinCAT Analytics license check so the library can be used without a valid license at runtime.

## Methods

### ForceLevelValid

_method_

```csharp
void ForceLevelValid()
```

Uses reflection to set the internal `LicenseValidator.Level` to `Valid`, preventing the SDK from throwing a license exception.

