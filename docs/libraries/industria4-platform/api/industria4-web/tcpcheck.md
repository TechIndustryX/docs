---
title: "TcpCheck"
---

# TcpCheck

_public class_

Namespace: `Industria4.Web`

Source: `src/Shared/Web/TcpCheck.cs`

## Summary

Check if a TCP connection to a host works

## Constructors

### TcpCheck

_constructor_

```csharp
TcpCheck(ILogger<TcpCheck> logger,string host,int port)
```

Initialises a new TCP dependency check. Logger used for status messages. The hostname or IP address to connect to. The TCP port to connect to.

## Methods

### WaitForReady

_method_

```csharp
Task WaitForReady()
```

