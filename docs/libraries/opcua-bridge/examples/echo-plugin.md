---
title: Echo Plugin
---

# Echo Plugin

## Scenario

Connect a standalone plugin process to the bridge and keep it alive with retry-enabled gRPC.

## Source Pattern

`src/Plugin.Echo/Program.cs` reads `BRIDGE_URI`, configures an insecure HTTP/2 gRPC channel and registers `PluginHostedService`.

## Steps

1. Set `BRIDGE_URI` to the server endpoint.
2. Start the plugin host.
3. Let the hosted service connect and configure namespaces.
4. Use logs to verify reconnect and configuration attempts.

## Example

```bash
BRIDGE_URI=http://localhost:8100 \
dotnet run --project src/Plugin.Echo/Industria4.Bridge.Plugin.Echo.csproj
```

## Expected Result

The plugin process connects to the server and becomes responsible for one or more plugin namespaces.

