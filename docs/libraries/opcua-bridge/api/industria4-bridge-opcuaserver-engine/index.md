---
title: "Industria4.Bridge.OpcUaServer.Engine"
---

# Industria4.Bridge.OpcUaServer.Engine

This namespace contains 5 public API types.

## Types

- [DynamicNodeConfiguration](./dynamicnodeconfiguration.md) _record_ - Holds the OPC UA namespace URI and the compiled node-set binary document for a dynamically loaded plugin namespace. The OPC UA namespace URI. Stream containing the compiled node-set binary data. Disposed together with this record.
- [DynamicNodeManager](./dynamicnodemanager.md) _class_ - OPC UA custom node manager that dynamically loads a node-set from a binary document and routes write and method-call operations to registered instances.
- [DynamicServer](./dynamicserver.md) _class_
- [DynamicServer](./dynamicserver-2.md) _class_ - OPC UA server that dynamically loads plugin namespaces at runtime from external plugin processes via gRPC, and implements to expose namespace configuration to those processes.
- [ServerHostedService](./serverhostedservice.md) _class_ - Hosted service that initializes and starts the OPC UA server on application startup.
