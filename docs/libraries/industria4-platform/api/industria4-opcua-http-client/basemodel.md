---
title: "BaseModel<TNodes>"
---

# BaseModel&lt;TNodes&gt;

_public class_

Namespace: `Industria4.OpcUa.Http.Client`

Source: `src/OpcUa/OpcUa.Http/Client/BaseModel.cs`

## Summary

Base HTTP request model for OPC-UA node operations.

## Properties

### Metadata

_property_

```csharp
Dictionary<string,object> Metadata
```

Gets or sets arbitrary metadata passed alongside the request.

### Nodes

_property_

```csharp
TNodes Nodes
```

Gets the collection of nodes included in the request.

### ServerId

_property_

```csharp
string ServerId
```

Gets or sets the identifier of the target OPC-UA server.

