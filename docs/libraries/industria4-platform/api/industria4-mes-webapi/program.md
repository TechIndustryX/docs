---
title: "Program"
---

# Program

_public class_

Namespace: `Industria4.Mes.WebApi`

Source: `src/Mes/Mes.WebApi/Program.cs`

## Summary

Entry point for the MES Web API host.

## Methods

### CreateBuilder

_method_

```csharp
IHostBuilder CreateBuilder(params string[] args)
```

Creates and configures the with Serilog, package configuration, and the Kestrel web host.

### Main

_method_

```csharp
void Main(string[] args)
```

Builds and starts the host, running all dependency health checks before accepting requests.

