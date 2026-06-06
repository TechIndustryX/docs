---
title: Node Read Write
---

# Node Read Write

## Scenario

Write a value from a plugin into an OPC UA node. The Echo plugin uses this pattern after receiving values from MQTT or from a local file.

## Complete Example

```csharp title="NodeWriter.cs"
using Google.Protobuf.WellKnownTypes;
using Industria4.Bridge.Grpc;
using Industria4.Bridge.OpcUaServer.Plugin;

public sealed class NodeWriter(Plugin.PluginClient client)
{
    public async Task WriteStringAsync(string nodeNamespace, string nodeId, string value)
    {
        var request = new WriteNodeRequest
        {
            Write = new Write
            {
                Id = IdGenerator.New(nodeId),
                NodeNamespace = nodeNamespace,
                NodeId = nodeId,
                Value = value.ToAny()
            }
        };

        await client.WriteNodeAsync(request);
    }
}
```

## Step By Step

1. Know the namespace URI configured by the plugin.
2. Know the target node ID from the `.uanodes` model.
3. Create a `WriteNodeRequest`.
4. Set a unique request `Id`.
5. Convert the .NET value with `ToAny()`.
6. Call `WriteNodeAsync()`.
7. Verify the value from an OPC UA client.

## MQTT To Node Example

```csharp
private async Task OnMessageAsync(string topic, string payload)
{
    var nodeId = topic switch
    {
        "line-a/press-01/status" => "99",
        "line-a/press-01/operator" => "75",
        _ => throw new NotSupportedException(topic)
    };

    await nodeWriter.WriteStringAsync("urn:techindustry:line-a", nodeId, payload);
}
```

## Validation

Subscribe to the node in an OPC UA client, publish a test MQTT message and confirm that the value changes.
