---
title: "ExternalProcessService"
---

# ExternalProcessService

_public class_

Namespace: `Industria4.Hosting.WebApp.Server`

Source: `src/Hosting/Hosting.WebApp.Server/ExternalProcessService.cs`

## Summary

A Windows wrapper that hosts and supervises the main application process, restarting it on unexpected exit.

## Constructors

### ExternalProcessService

_constructor_

```csharp
ExternalProcessService(string[] args,string[] specialArguments)
```

Initializes a new instance of with the forwarded command-line arguments.

## Methods

### ManualRun

_method_

```csharp
void ManualRun()
```

Starts the external process without running as a Windows service (for console/debug mode).

### OnStart

_method_

```csharp
void OnStart(string[] args)
```

### OnStop

_method_

```csharp
void OnStop()
```

