---
title: Run Server
---

# Run Server

## Scenario

Start the OPC UA Bridge server locally so plugin processes can connect over gRPC and OPC UA clients can browse the dynamic namespace.

## Complete Host

```csharp title="Program.cs"
using Industria4.Bridge.OpcUaServer;
using Microsoft.AspNetCore.Server.Kestrel.Core;

Host.CreateDefaultBuilder(args)
    .UseWindowsService(options =>
    {
        options.ServiceName = "TechIndustry.OpcUaBridge";
    })
    .ConfigureWebHostDefaults(webBuilder =>
    {
        webBuilder.ConfigureKestrel(options =>
        {
            options.ListenAnyIP(8100, o => o.Protocols = HttpProtocols.Http2);
        });
        webBuilder.UseStartup<Startup>();
    })
    .Build()
    .Run();
```

```csharp title="Startup.cs"
using Industria4.Bridge.OpcUaServer.Engine;
using Industria4.Bridge.OpcUaServer.Plugin;

public void ConfigureServices(IServiceCollection services)
{
    services.AddHostedService<ServerHostedService>();
    services.AddSingleton<DynamicServer>();
    services.AddSingleton<IPluginNodeProvider>(p => p.GetRequiredService<DynamicServer>());
    services.AddGrpc();
}

public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    app.UseRouting();
    app.UseEndpoints(endpoints =>
    {
        endpoints.MapGrpcService<PluginService>();
        endpoints.MapGet("/", async context => await context.Response.WriteAsync("Running..."));
    });
}
```

## Step By Step

1. Start the bridge server executable or service.
2. Expose port `8100` for gRPC over HTTP/2.
3. Confirm the root endpoint returns `Running...`.
4. Start at least one plugin process with `BRIDGE_URI=http://localhost:8100`.
5. Connect an OPC UA client and browse the dynamic address space.

## Validation

```bash
curl http://localhost:8100/
```

Expected response:

```text
Running...
```

## Operations Notes

- Keep the bridge server running independently from plugins.
- Restarting a plugin should not require restarting the OPC UA server.
- Run the host as a Windows service when installed on an industrial PC.
