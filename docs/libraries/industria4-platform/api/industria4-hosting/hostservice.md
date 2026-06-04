---
title: "HostService"
---

# HostService

_public class_

Namespace: `Industria4.Hosting`

Source: `src/Shared/Hosting.Server/HostService.cs`

## Summary

Windows service which runs an instance of

## Constructors

### HostService

_constructor_

```csharp
HostService(IHost host)
```

Initialises a new instance wrapping the provided host. The to run as a Windows service.

## Methods

### OnStart

_method_

```csharp
void OnStart(string[] args)
```

### OnStarted

_method_

```csharp
void OnStarted()
```

Called after the host has successfully started.

### OnStarting

_method_

```csharp
void OnStarting(string[] args)
```

Called before the host is started; override to perform pre-start work. Start arguments passed by the service control manager.

### OnStop

_method_

```csharp
void OnStop()
```

### OnStopped

_method_

```csharp
void OnStopped()
```

Called after the host has fully stopped.

### OnStopping

_method_

```csharp
void OnStopping()
```

Called before the host is stopped.

