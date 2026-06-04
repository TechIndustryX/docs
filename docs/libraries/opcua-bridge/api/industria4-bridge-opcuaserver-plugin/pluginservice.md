---
title: "PluginService"
---

# PluginService

_public class_

Namespace: `Industria4.Bridge.OpcUaServer.Plugin`

Source: `src/OpcUaServer/Plugin/PluginService.cs`

## Summary

gRPC service implementation that exposes OPC UA address-space configuration and node write operations to external plugin processes via the generated `Plugin` service contract.

## Constructors

### PluginService

_constructor_

```csharp
PluginService(IPluginNodeProvider pluginNodeProvider,ILogger<PluginService> logger)
```

Initializes a new with the required dependencies.

## Methods

### ConfigureNodes

_method_

```csharp
Task<ConfigureNodeResponse> ConfigureNodes(ConfigureNodeRequest request,ServerCallContext context)
```

Configures a plugin namespace using the node-set document in `request` (unary call).

### ConfigureNodesConnection

_method_

```csharp
Task ConfigureNodesConnection(ConfigureNodeRequest request,IServerStreamWriter<ConfigureNodeResponse> responseStream,ServerCallContext context)
```

Configures a plugin namespace and keeps the connection alive by streaming heartbeat responses. The namespace is automatically removed when the caller disconnects.

### ReadNode

_method_

```csharp
Task<ReadNodeReply> ReadNode(ReadNodeRequest request,ServerCallContext context)
```

Reads the current value of the specified OPC UA node in the plugin namespace identified by `request`.

### WriteNode

_method_

```csharp
Task<WriteNodeReply> WriteNode(WriteNodeRequest request,ServerCallContext context)
```

Writes a value to the specified OPC UA node in the plugin namespace identified by `request`.

