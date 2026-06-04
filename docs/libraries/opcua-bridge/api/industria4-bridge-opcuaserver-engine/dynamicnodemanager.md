---
title: "DynamicNodeManager"
---

# DynamicNodeManager

_public class_

Namespace: `Industria4.Bridge.OpcUaServer.Engine`

Source: `src/OpcUaServer/Engine/DynamicNodeManager.cs`

## Summary

OPC UA custom node manager that dynamically loads a node-set from a binary document and routes write and method-call operations to registered instances.

## Properties

### Namespace

_property_

```csharp
string Namespace
```

### NodeConfiguration

_property_

```csharp
DynamicNodeConfiguration NodeConfiguration
```

Gets or sets the node-set configuration document used to populate the address space.

## Methods

### AddInterceptor

_method_

```csharp
void AddInterceptor(IPluginNodeInterceptor pluginNodeInterceptor)
```

### CreateAddressSpace

_method_

```csharp
void CreateAddressSpace(IDictionary<NodeId,IList<IReference>> externalReferences)
```

### LoadPredefinedNodes

_method_

```csharp
NodeStateCollection LoadPredefinedNodes(ISystemContext context)
```

### RemoveInterceptor

_method_

```csharp
void RemoveInterceptor(IPluginNodeInterceptor pluginNodeInterceptor)
```

