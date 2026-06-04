---
title: "DynamicServer"
---

# DynamicServer

_public class_

Namespace: `Industria4.Bridge.OpcUaServer.Engine`

Source: `src/OpcUaServer/Engine/DynamicServer.cs`

## Summary

OPC UA server that dynamically loads plugin namespaces at runtime from external plugin processes via gRPC, and implements to expose namespace configuration to those processes.

## Constructors

### DynamicServer

_constructor_

```csharp
DynamicServer(ILogger<DynamicServer> logger,ILogger<DynamicNodeManager> nodeManagerLogger)
```

## Methods

### CreateMasterNodeManager

_method_

```csharp
MasterNodeManager CreateMasterNodeManager(IServerInternal server,ApplicationConfiguration configuration)
```

### LoadServerProperties

_method_

```csharp
ServerProperties LoadServerProperties()
```

### OnServerStarted

_method_

```csharp
void OnServerStarted(IServerInternal server)
```

### OnServerStarting

_method_

```csharp
void OnServerStarting(ApplicationConfiguration configuration)
```

### OnServerStopping

_method_

```csharp
void OnServerStopping()
```

