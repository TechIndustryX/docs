---
title: Register Host
---

# Register Host

## Scenario

Create a .NET worker or console app that can communicate with a TwinCAT PLC through ADS.

## Source Pattern

`TechIndustry.Rpc.TwinCAT.Sample/Program.cs` registers `AddTwinCATRpc`, binds `AdsOptions` and resolves `IAdsClientFactory`.

## Steps

1. Add static route configuration when the target requires it.
2. Register `AddTwinCATRpc()`.
3. Bind `Ads:NetId` and `Ads:Port`.
4. Start the host.
5. Resolve `IAdsClientFactory` or `AdsClientService`.

## Expected Result

The process maintains an ADS connection and can create typed request, reply and invoke objects.

