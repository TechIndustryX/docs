---
title: "Industria4.Bridge.OpcUaServer.Plugin"
---

# Industria4.Bridge.OpcUaServer.Plugin

This namespace contains 5 public API types.

## Types

- [CallMethodResult](./callmethodresult.md) _record_
- [IPluginNodeInterceptor](./ipluginnodeinterceptor.md) _interface_ - Receives write and method-call notifications from the OPC UA server for a plugin namespace.
- [IPluginNodeManager](./ipluginnodemanager.md) _interface_ - Manages the OPC UA address space for a single plugin namespace and exposes write/read operations to plugin implementations.
- [IPluginNodeProvider](./ipluginnodeprovider.md) _interface_ - Manages runtime configuration of plugin namespaces within the OPC UA server address space.
- [PluginService](./pluginservice.md) _class_ - gRPC service implementation that exposes OPC UA address-space configuration and node write operations to external plugin processes via the generated `Plugin` service contract.
