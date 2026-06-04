---
title: "OpcUaClient"
---

# OpcUaClient

_public class_

Namespace: `Industria4.OpcUa.Comunication`

Source: `src/OpcUa/OpcUa.Comunication/OpcUaClient.cs`

## Summary

Direct OPC-UA client that manages a single session with one server.

## Constructors

### OpcUaClient

_constructor_

```csharp
OpcUaClient(ILogger<OpcUaClient> logger,string uri,bool useSecurity,UserIdentity userIdentity)
```

Initialises a new with the supplied endpoint and credentials.

## Properties

### Uri

_property_

```csharp
string Uri
```

Gets the OPC-UA endpoint URI this client connects to.

### UserIdentity

_property_

```csharp
UserIdentity UserIdentity
```

Gets the user identity used to authenticate with the server.

### UseSecurity

_property_

```csharp
bool UseSecurity
```

Gets a value indicating whether transport-level security is enabled.

## Methods

### Dispose

_method_

```csharp
void Dispose()
```

Disposes the session and any active reconnect handler.

### StartAsync

_method_

```csharp
Task StartAsync()
```

### SubscribeNodeAsync

_method_

```csharp
Task<IDisposable> SubscribeNodeAsync(NodeId nodeId,Action<object> callback)
```

### WriteNodesAsync

_method_

```csharp
Task WriteNodesAsync(IDictionary<NodeId,object> nodeValues,IDictionary<string,object> metadata)
```

