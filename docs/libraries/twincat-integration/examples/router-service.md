---
title: Router Service
---

# Router Service

## Scenario

Run an ADS router from the .NET host when the deployment needs to create or manage ADS connectivity locally.

## Complete Example

```csharp title="Program.cs"
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using TechIndustry.Rpc.TwinCAT;

var builder = Host.CreateDefaultBuilder(args);

builder.ConfigureServices((context, services) =>
{
    services.AddTwinCATRouter();
    services.AddTwinCATRpc();
    services.Configure<AdsOptions>(context.Configuration.GetSection("Ads"));
});

await builder.Build().RunAsync();
```

## Step By Step

1. Decide whether the target machine already has a working ADS router.
2. If not, register `AddTwinCATRouter()`.
3. Keep `AddTwinCATRpc()` registered for the actual RPC client service.
4. Configure `AdsOptions` with target `NetId` and `Port`.
5. Start the host before invoking PLC symbols.
6. Monitor router startup logs.

## Validation

Run a minimal request after startup:

```csharp
await using var setQuantity =
    factory.CreateRequest<short>("MAIN.fbMachine2.fbSetQuantity");

await setQuantity.InvokeAsync(1);
```

If the router and route are correct, the request reaches the PLC without ADS connection errors.

## Deployment Notes

- Industrial PCs often already have TwinCAT router services installed.
- Containers and service-hosted apps may need explicit router handling.
- Keep route configuration under deployment control; do not rely on manual machine state.
