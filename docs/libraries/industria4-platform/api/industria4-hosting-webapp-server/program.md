---
title: "Program"
---

# Program

_public class_

Namespace: `Industria4.Hosting.WebApp.Server`

Source: `src/Hosting/Hosting.WebApp.Server/Program.cs`

## Summary

Entry point for the Industria4 Hosting Web API server, supporting both direct console mode and Windows Service mode.

## Constructors

### Program

_constructor_

```csharp
Program(string[] args)
```

Initializes a new instance and configures the command-line interface options (safe-mode, SSL, service install/uninstall).

## Methods

### CreateHostBuilder

_method_

```csharp
IHostBuilder CreateHostBuilder(string[] args)
```

Creates and configures the with Serilog, external resources, and the package catalog (skipped in safe mode).

### Main

_method_

```csharp
void Main(string[] args)
```

Application entry point: parses arguments (including safe-mode flag), then delegates to .

### MainInternal

_method_

```csharp
void MainInternal(bool isService,string[] args)
```

Runs the host either as a Windows Service or as a console application, depending on `isService`. When , runs as a Windows Service; otherwise runs as a console application.

### Run

_method_

```csharp
int Run(bool isService)
```

