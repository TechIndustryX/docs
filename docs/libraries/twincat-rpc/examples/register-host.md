---
title: Register Host
---

# Register Host

## Scenario

Configure a .NET worker that connects to a TwinCAT runtime and exposes `IAdsClientFactory` for request/reply and notification flows.

## Configuration

```json title="appsettings.json"
{
  "Ads": {
    "NetId": "192.168.1.30.1.1",
    "Port": 851
  }
}
```

## Complete Example

```csharp title="Program.cs"
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using TechIndustry.Rpc.TwinCAT;

var builder = Host.CreateDefaultBuilder(args);

builder.ConfigureAppConfiguration(configuration =>
{
    configuration.AddStaticRoutesXmlConfiguration();
});

builder.ConfigureServices((context, services) =>
{
    services.AddTwinCATRpc();
    services.Configure<AdsOptions>(context.Configuration.GetSection("Ads"));
    services.AddHostedService<MachineRpcWorker>();
});

await builder.Build().RunAsync();
```

```csharp title="MachineRpcWorker.cs"
using Microsoft.Extensions.Hosting;
using TechIndustry.Rpc.TwinCAT;

public sealed class MachineRpcWorker(IAdsClientFactory factory) : BackgroundService
{
    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        await using var setQuantity =
            factory.CreateRequest<short>("MAIN.fbMachine2.fbSetQuantity");

        await setQuantity.InvokeAsync(2, stoppingToken);
    }
}
```

## Step By Step

1. Configure `Ads:NetId` and `Ads:Port`.
2. Add static routes if your deployment uses `StaticRoutes.xml`.
3. Call `services.AddTwinCATRpc()`.
4. Configure `AdsOptions` from configuration.
5. Resolve `IAdsClientFactory` in hosted services.
6. Create request, reply or invoke objects with the full PLC symbol path.

## Validation

- Confirm the TwinCAT runtime is reachable on the configured AMS Net ID.
- Confirm the PLC symbol exists and is online.
- Log startup failures from `AdsClientService`.
