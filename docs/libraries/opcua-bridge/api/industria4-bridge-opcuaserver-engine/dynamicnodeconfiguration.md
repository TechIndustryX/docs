---
title: "DynamicNodeConfiguration"
---

# DynamicNodeConfiguration

_public record_

Namespace: `Industria4.Bridge.OpcUaServer.Engine`

Source: `src/OpcUaServer/Engine/DynamicNodeConfiguration.cs`

## Summary

Holds the OPC UA namespace URI and the compiled node-set binary document for a dynamically loaded plugin namespace. The OPC UA namespace URI. Stream containing the compiled node-set binary data. Disposed together with this record.

## Properties

### Document

_property_

```csharp
Stream Document
```

Record parameter on DynamicNodeConfiguration.

### Namespace

_property_

```csharp
string Namespace
```

Record parameter on DynamicNodeConfiguration.

## Methods

### Dispose

_method_

```csharp
void Dispose()
```

