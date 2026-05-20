---
title: OPC UA Bridge
---

# OPC UA Bridge API Reference

Source repository: `TechIndustryX/opcua-bridge`

## .NET API

DocFX is configured for:

- `src/OpcUaServer/Industria4.Bridge.OpcUaServer.csproj`
- `src/Grpc/Industria4.Bridge.Grpc.csproj`
- `src/Plugin.Echo/Industria4.Bridge.Plugin.Echo.csproj`

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

