---
title: Dynamic Namespace
---

# Dynamic Namespace

## Scenario

Load a `.uanodes` model into a namespace so OPC UA clients can browse plugin-owned nodes.

## Complete Example

```csharp title="ConfigureNamespace.cs"
using Google.Protobuf;
using Grpc.Core;
using Industria4.Bridge.OpcUaServer.Plugin;

public async Task ConfigureNamespaceAsync(
    Plugin.PluginClient client,
    string modelFile,
    string nodeNamespace,
    int namespaceIndex,
    CancellationToken token)
{
    await using var stream = File.OpenRead(modelFile);

    var request = new ConfigureNodeRequest
    {
        NodeNamespace = nodeNamespace,
        NodeNamespaceIndex = namespaceIndex,
        Document = await ByteString.FromStreamAsync(stream, token)
    };

    using var connection = client.ConfigureNodesConnection(request, cancellationToken: token);

    while (await connection.ResponseStream.MoveNext(token))
    {
        Console.WriteLine($"Namespace {nodeNamespace} configured");
    }
}
```

## Step By Step

1. Create or export a `.uanodes` model file.
2. Choose a stable namespace URI, for example `urn:techindustry:line-a`.
3. Choose a namespace index that does not conflict with another plugin.
4. Send the model through `ConfigureNodesAsync` for one-shot configuration.
5. Use `ConfigureNodesConnection` when the plugin must keep an active connection.
6. Reconfigure after reconnecting to the bridge.

## Validation

Open an OPC UA client and browse the namespace. You should see the nodes declared in the `.uanodes` file under the chosen namespace.

## Practical Rules

- One plugin can publish multiple namespaces.
- Keep node IDs stable so HMI and SCADA clients do not need reconfiguration.
- Version model files together with the plugin that owns them.
