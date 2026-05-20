---
title: Quickstart
---

# TwinCAT RPC Quickstart

Use `TechIndustry.Rpc.TwinCAT` from a .NET service when you need request/reply or command-style interactions with TwinCAT PLC function blocks.

## 1. Add the package

Configure the TechIndustry GitHub Packages feed, then add the library:

```bash
dotnet add package TechIndustry.Rpc.TwinCAT
```

## 2. Configure ADS access

Register the TwinCAT RPC services and bind ADS settings from configuration:

```csharp
using Microsoft.Extensions.DependencyInjection;
using TechIndustry.Rpc.TwinCAT;

var services = new ServiceCollection();

services.AddTwinCATRpc();
services.Configure<AdsOptions>(options =>
{
    options.NetId = "127.0.0.1.1.1";
    options.Port = 851;
});
```

## 3. Call a PLC symbol

Create a request or request/reply client for the PLC symbol you want to use:

```csharp
var provider = services.BuildServiceProvider();
var factory = provider.GetRequiredService<IAdsClientFactory>();

var request = factory.CreateRequestReply<int>("MAIN.fbMachine.fbGetStatus");
```

Use the PLC assets supplied with the project to expose compatible function blocks, then validate against a TwinCAT test runtime before connecting to a production PLC.
