---
title: Write and Method Interception
---

# Write and Method Interception

## Scenario

Intercept writes and method calls from OPC UA clients, validate them in the plugin and reply with success or failure.

## Complete Example

```csharp title="InterceptionLoop.cs"
using Grpc.Core;
using Industria4.Bridge.OpcUaServer.Plugin;

public async Task RunInterceptionAsync(
    Plugin.PluginClient client,
    string nodeNamespace,
    CancellationToken token)
{
    using var stream = client.InterceptWriteNode(cancellationToken: token);

    await stream.RequestStream.WriteAsync(new InterceptWriteNodeRequest
    {
        Intercept = new Intercept
        {
            NodeNamespace = nodeNamespace
        }
    }, token);

    await foreach (var reply in stream.ResponseStream.ReadAllAsync(token))
    {
        switch (reply.OperationCase)
        {
            case InterceptWriteNodeReply.OperationOneofCase.Write:
                var value = reply.Write.Value.ToObject();
                Console.WriteLine($"Write {reply.Write.NodeId}: {value}");

                await stream.RequestStream.WriteAsync(new InterceptWriteNodeRequest
                {
                    WriteResult = new WriteResult
                    {
                        Id = reply.Write.Id,
                        Status = true
                    }
                }, token);
                break;

            case InterceptWriteNodeReply.OperationOneofCase.Method:
                Console.WriteLine($"Method {reply.Method.NodeId}");

                var result = new InterceptWriteNodeRequest
                {
                    MethodResult = new MethodResult
                    {
                        Id = reply.Method.Id,
                        Status = true
                    }
                };
                result.MethodResult.Output.AddRange(reply.Method.Arguments);

                await stream.RequestStream.WriteAsync(result, token);
                break;
        }
    }
}
```

## Step By Step

1. Open `InterceptWriteNode`.
2. Send an `Intercept` request for the namespace owned by the plugin.
3. Read server replies in an async loop.
4. For writes, inspect `reply.Write.NodeId` and `reply.Write.Value`.
5. Return `WriteResult` with the original operation ID.
6. For method calls, return `MethodResult` with status and outputs.
7. Keep the stream alive for the lifetime of the plugin.

## Validation

Use an OPC UA client to write to an intercepted node. The client should receive success only after the plugin answers with `WriteResult`.

## Usage Pattern

Use interception when the OPC UA node represents a command, setpoint or operation that needs plugin-side validation before it is accepted.
