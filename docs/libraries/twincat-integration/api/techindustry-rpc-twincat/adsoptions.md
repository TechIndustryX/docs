---
title: "AdsOptions"
---

# AdsOptions

_public class_

Namespace: `TechIndustry.Rpc.TwinCAT`

Source: `TechIndustry.Rpc.TwinCAT/TechIndustry.Rpc.TwinCAT/AdsOptions.cs`

## Summary

Configuration options for establishing an ADS connection to a TwinCAT PLC target.

## Properties

### NetId

_property_

```csharp
string NetId
```

Gets or sets the AMS Net ID of the target PLC (e.g. `192.168.1.1.1.1`).

### Port

_property_

```csharp
int Port
```

Gets or sets the AMS port on the target PLC. Defaults to `851` (first PLC runtime).

