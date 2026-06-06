---
title: Node Read/Write
---

# Node Read/Write

## Scenario

Update values in plugin-owned OPC UA nodes from an external data source.

## Source Pattern

`PluginHostedService.WriteValueAsync` loops over plugin namespaces and calls `WriteNodeAsync` with node id, namespace and serialized value. The server handles it in `PluginService.WriteNode`.

## Steps

1. Resolve the target node id and namespace URI.
2. Build a `WriteNodeRequest`.
3. Convert the payload with the protobuf `Any` helper.
4. Send the request to the bridge.
5. Check the write result status.

## Expected Result

Connected OPC UA clients see the updated node value through the server address space.

