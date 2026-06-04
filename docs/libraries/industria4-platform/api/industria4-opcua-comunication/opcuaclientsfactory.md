---
title: "OpcUaClientsFactory"
---

# OpcUaClientsFactory

_public class_

Namespace: `Industria4.OpcUa.Comunication`

Source: `src/OpcUa/OpcUa.Comunication/OpcUaClientsFactory.cs`

## Summary

Creates and caches instances, wrapping them with registered middleware.

## Constructors

### OpcUaClientsFactory

_constructor_

```csharp
OpcUaClientsFactory(ILogger<OpcUaClient> clientLogger,ILogger<OpcUaClientsFactory> logger,IServiceProvider serviceProvider)
```

Initialises a new .

## Methods

### GetAsync

_method_

```csharp
Task<IOpcUaClient> GetAsync(Uri uri,bool useSecurity,UserIdentity identity,params object[] args)
```

Returns a connected (and cached) for the given URI.

### GetWithMiddlewaresAsync

_method_

```csharp
Task<IOpcUaClient> GetWithMiddlewaresAsync(Uri uri,bool useSecurity,UserIdentity identity,params object[] args)
```

Returns a client for the given URI, wrapped with all registered instances.

