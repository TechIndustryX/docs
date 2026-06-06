---
title: Echo Plugin
---

# Echo Plugin

## Scenario

Create a plugin process that connects to the bridge server, registers a hosted service and retries gRPC calls while the bridge is starting.

## Complete Host

```csharp title="Program.cs"
using Grpc.Core;
using Grpc.Net.Client.Configuration;
using Industria4.Bridge.OpcUaServer.Plugin;

var bridgeUri = Environment.GetEnvironmentVariable("BRIDGE_URI") ?? "http://localhost:8100";

AppContext.SetSwitch("System.Net.Http.SocketsHttpHandler.Http2UnencryptedSupport", true);

await Host.CreateDefaultBuilder(args)
    .ConfigureServices(services =>
    {
        services.AddHostedService<EchoPluginHostedService>();

        var retry = new MethodConfig
        {
            Names = { MethodName.Default },
            RetryPolicy = new RetryPolicy
            {
                MaxAttempts = 5,
                InitialBackoff = TimeSpan.FromMilliseconds(200),
                MaxBackoff = TimeSpan.FromSeconds(2),
                BackoffMultiplier = 1.5,
                RetryableStatusCodes = { StatusCode.Unavailable }
            }
        };

        services.AddGrpcClient<Plugin.PluginClient>(options =>
        {
            options.Address = new Uri(bridgeUri);
            options.ChannelOptionsActions.Add(channel =>
            {
                channel.ServiceConfig = new ServiceConfig { MethodConfigs = { retry } };
            });
        });
    })
    .RunConsoleAsync();
```

## Step By Step

1. Create a console or worker project for the plugin.
2. Read `BRIDGE_URI` from the environment.
3. Enable unencrypted HTTP/2 when running locally.
4. Register `Plugin.PluginClient` with retry policy.
5. Put all bridge interaction inside a hosted service.
6. Deploy plugin and bridge as separate processes.

## Validation

Run two terminals:

```bash
dotnet run --project src/OpcUaServer
```

```bash
BRIDGE_URI=http://localhost:8100 dotnet run --project src/Plugin.Echo
```

The plugin should reconnect automatically if the bridge starts a few seconds later.
