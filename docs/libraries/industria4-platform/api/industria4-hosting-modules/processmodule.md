---
title: "ProcessModule"
---

# ProcessModule

_public class_

Namespace: `Industria4.Hosting.Modules`

Source: `src/Shared/Hosting.Server/Modules/ProcessModule.cs`

## Summary

Base class for modules that are hosted as external child processes, providing lifecycle management (start/stop/restart) and health-check pinging.

## Constructors

### ProcessModule

_constructor_

```csharp
ProcessModule(ILogger logger,IConfiguration configuration)
```

Initialises a new instance with the given logger and configuration. The logger instance used to record process events. The application configuration.

## Properties

### Configuration

_property_

```csharp
IConfiguration Configuration
```

Gets the configuration for this module.

### Environment

_property_

```csharp
IDictionary<string,string> Environment
```

Gets additional environment variables that are injected into the child process.

### Logger

_property_

```csharp
ILogger Logger
```

Gets the logger used by this module.

### Name

_property_

```csharp
string Name
```

Gets the display name of this module.

### ProcessNameExe

_property_

```csharp
string ProcessNameExe
```

Gets the executable file name (including extension) for the child process.

### ProcessPath

_property_

```csharp
string ProcessPath
```

Gets the full path to the child process executable.

### WorkingDir

_property_

```csharp
string WorkingDir
```

Gets the working directory used when starting the child process.

## Methods

### Dispose

_method_

```csharp
void Dispose()
```

### LoadAsync

_method_

```csharp
Task LoadAsync(CancellationToken cancellationToken)
```

### UnloadAsync

_method_

```csharp
Task UnloadAsync(CancellationToken cancellationToken)
```

