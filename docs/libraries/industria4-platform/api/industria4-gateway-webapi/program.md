---
title: "Program"
---

# Program

_public class_

Namespace: `Industria4.Gateway.WebApi`

Source: `src/Gateway/Gateway.WebApi/Program.cs`

## Summary

Entry point for the Industria4 Gateway Web API host.

## Methods

### CreateBuilder

_method_

```csharp
IHostBuilder CreateBuilder(params string[] args)
```

Creates and configures the default with Serilog logging and the class.

### Main

_method_

```csharp
void Main(string[] args)
```

Builds and runs the host, performing dependency health checks before accepting requests.

