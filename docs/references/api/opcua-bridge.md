---
title: OPC UA Bridge
---

# OPC UA Bridge API Reference

Source repository: `TechIndustryX/opcua-bridge`

## .NET API

Detected 15 C# types and 37 members across 6 namespaces.

### `Google.Protobuf.WellKnownTypes`

#### `Extensions`

_public class_

Source: `src/Grpc/Extensions.cs`

Extension methods for converting .NET objects to Protobuf Well-Known Types.

Members:

- `Any ToAny(this object obj)` _method_ — Packs a .NET into a Protobuf . Supports , , , , , and . The value to pack. Thrown for unsupported types.
- `object ToObject(this Any any)` _method_ — Unpacks a Protobuf to its .NET value. Supports , , , , , and . The to unpack. Thrown when the packed type is not recognized.
- `object ToObject(this Value any)` _method_
- `Value ToValue(this object obj)` _method_ — Converts a .NET to a Protobuf . Only is currently supported. The value to convert. Thrown for unsupported types.

### `Industria4.Bridge.Grpc`

#### `IdGenerator`

_public class_

Source: `src/Grpc/IdGenerator.cs`

Generates unique composite identifiers by combining caller-supplied values with a random GUID suffix.

Members:

- `string New(params object[] values)` _method_ — Creates a new unique ID by joining `values` with colons and appending a random GUID. The key parts to prefix the ID with. A string of the form `value1:value2:...:&amp;lt;guid&amp;gt;`.

### `Industria4.Bridge.OpcUaServer`

#### `Startup`

_public class_

Source: `src/OpcUaServer/Startup.cs`

Configures services and the HTTP request pipeline for the OPC UA server host.

Members:

- `Startup(IConfiguration configuration)` _constructor_ — Initializes a new instance of with the provided configuration. The application configuration.
- `void Configure(IApplicationBuilder app,IWebHostEnvironment env)` _method_ — Configures the HTTP request pipeline, including routing and gRPC endpoint mapping. The application builder. The web hosting environment.
- `void ConfigureServices(IServiceCollection services)` _method_ — Registers services required by the OPC UA server, including the gRPC plugin service and the dynamic node provider. The service collection to configure.
- `IConfiguration Configuration` _property_ — Gets the application configuration.

### `Industria4.Bridge.OpcUaServer.Engine`

#### `DynamicNodeConfiguration`

_public record_

Source: `src/OpcUaServer/Engine/DynamicNodeConfiguration.cs`

Holds the OPC UA namespace URI and the compiled node-set binary document for a dynamically loaded plugin namespace. The OPC UA namespace URI. Stream containing the compiled node-set binary data. Disposed together with this record.

Members:

- `void Dispose()` _method_
- `Stream Document` _property_ — Record parameter on DynamicNodeConfiguration.
- `string Namespace` _property_ — Record parameter on DynamicNodeConfiguration.

#### `DynamicNodeManager`

_public class_

Source: `src/OpcUaServer/Engine/DynamicNodeManager.cs`

OPC UA custom node manager that dynamically loads a node-set from a binary document and routes write and method-call operations to registered instances.

Members:

- `void AddInterceptor(IPluginNodeInterceptor pluginNodeInterceptor)` _method_
- `void CreateAddressSpace(IDictionary&lt;NodeId,IList&lt;IReference&gt;&gt; externalReferences)` _method_
- `NodeStateCollection LoadPredefinedNodes(ISystemContext context)` _method_
- `void RemoveInterceptor(IPluginNodeInterceptor pluginNodeInterceptor)` _method_
- `string Namespace` _property_
- `DynamicNodeConfiguration NodeConfiguration` _property_ — Gets or sets the node-set configuration document used to populate the address space.

#### `DynamicServer`

_public class_

Source: `src/OpcUaServer/Engine/DynamicServer.UserAuthentication.cs`

#### `DynamicServer`

_public class_

Source: `src/OpcUaServer/Engine/DynamicServer.cs`

OPC UA server that dynamically loads plugin namespaces at runtime from external plugin processes via gRPC, and implements to expose namespace configuration to those processes.

Members:

- `DynamicServer(ILogger&lt;DynamicServer&gt; logger,ILogger&lt;DynamicNodeManager&gt; nodeManagerLogger)` _constructor_
- `MasterNodeManager CreateMasterNodeManager(IServerInternal server,ApplicationConfiguration configuration)` _method_
- `ServerProperties LoadServerProperties()` _method_
- `void OnServerStarted(IServerInternal server)` _method_
- `void OnServerStarting(ApplicationConfiguration configuration)` _method_
- `void OnServerStopping()` _method_

#### `ServerHostedService`

_public class_

Source: `src/OpcUaServer/Engine/ServerHostedService.cs`

Hosted service that initializes and starts the OPC UA server on application startup.

Members:

- `ServerHostedService(IServiceProvider serviceProvider,ILogger&lt;ServerHostedService&gt; logger)` _constructor_ — Initializes a new with the required dependencies.
- `Task StartAsync(CancellationToken cancellationToken)` _method_
- `Task StopAsync(CancellationToken cancellationToken)` _method_

### `Industria4.Bridge.OpcUaServer.Plugin`

#### `CallMethodResult`

_public record_

Source: `src/OpcUaServer/Plugin/PluginService.cs`

Members:

- `IReadOnlyList&lt;object&gt; Output` _property_
- `bool Status` _property_

#### `IPluginNodeInterceptor`

_public interface_

Source: `src/OpcUaServer/Plugin/IPluginNodeManager.cs`

Receives write and method-call notifications from the OPC UA server for a plugin namespace.

#### `IPluginNodeManager`

_public interface_

Source: `src/OpcUaServer/Plugin/IPluginNodeManager.cs`

Manages the OPC UA address space for a single plugin namespace and exposes write/read operations to plugin implementations.

#### `IPluginNodeProvider`

_public interface_

Source: `src/OpcUaServer/Plugin/IPluginNodeProvider.cs`

Manages runtime configuration of plugin namespaces within the OPC UA server address space.

#### `PluginService`

_public class_

Source: `src/OpcUaServer/Plugin/PluginService.cs`

gRPC service implementation that exposes OPC UA address-space configuration and node write operations to external plugin processes via the generated `Plugin` service contract.

Members:

- `PluginService(IPluginNodeProvider pluginNodeProvider,ILogger&lt;PluginService&gt; logger)` _constructor_ — Initializes a new with the required dependencies.
- `Task&lt;ConfigureNodeResponse&gt; ConfigureNodes(ConfigureNodeRequest request,ServerCallContext context)` _method_ — Configures a plugin namespace using the node-set document in `request` (unary call).
- `Task ConfigureNodesConnection(ConfigureNodeRequest request,IServerStreamWriter&lt;ConfigureNodeResponse&gt; responseStream,ServerCallContext context)` _method_ — Configures a plugin namespace and keeps the connection alive by streaming heartbeat responses. The namespace is automatically removed when the caller disconnects.
- `Task&lt;ReadNodeReply&gt; ReadNode(ReadNodeRequest request,ServerCallContext context)` _method_ — Reads the current value of the specified OPC UA node in the plugin namespace identified by `request`.
- `Task&lt;WriteNodeReply&gt; WriteNode(WriteNodeRequest request,ServerCallContext context)` _method_ — Writes a value to the specified OPC UA node in the plugin namespace identified by `request`.

### `Industria4.Bridge.Plugin.Echo`

#### `Constants`

_public class_

Source: `src/Plugin.Echo/Constants.cs`

OPC UA namespace URIs used by the Echo plugin.

#### `PluginHostedService`

_internal class_

Source: `src/Plugin.Echo/PluginHostedService.cs`

Members:

- `PluginHostedService(IServiceProvider serviceProvider)` _constructor_
- `Task StartAsync(CancellationToken cancellationToken)` _method_
- `Task StopAsync(CancellationToken cancellationToken)` _method_

## gRPC / Protobuf

### src/OpcUaServer/Plugin/PluginService.proto

Services:

- `Plugin`

Messages:

- `ConfigureNodeRequest`
- `ConfigureNodeResponse`
- `WriteNodeRequest`
- `Method`
- `Write`
- `ReadNodeReply`
- `ReadNodeRequest`
- `WriteIntercept`
- `WriteResult`
- `MethodResult`
- `WriteNodeReply`
- `InterceptWriteNodeReply`
- `InterceptWriteNodeRequest`

