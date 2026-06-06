---
title: Run Server
---

# Run Server

## Scenario

Run the bridge host so it exposes the OPC UA server and the gRPC plugin endpoint.

## Source Pattern

`src/OpcUaServer/Program.cs` configures Kestrel for HTTP/2 on port `8100`. `Startup.cs` registers `ServerHostedService`, `DynamicServer`, `IPluginNodeProvider` and `PluginService`.

## Steps

1. Start the OPC UA server host.
2. Confirm the HTTP endpoint answers with `Running...`.
3. Confirm plugin clients can connect to `http://localhost:8100`.
4. Keep the process running while plugin processes register namespaces.

## Example

```bash
dotnet run --project src/OpcUaServer/Industria4.Bridge.OpcUaServer.csproj
```

## Expected Result

The server owns OPC UA protocol hosting and waits for plugins to provide node models and behavior.

