---
title: "Program"
---

# Program

_public class_

Namespace: `Industria4.OpcUa.WebApi`

Source: `src/OpcUa/OpcUa.WebApi/Program.cs`

## Summary

Entry point for the OpcUa Web API host, responsible for wiring up the .NET Generic Host with package catalog and Serilog.

## Methods

### CreateBuilder

_method_

```csharp
IHostBuilder CreateBuilder(params string[] args)
```

Creates and configures the with Serilog, culture defaults, and the package catalog.

### Main

_method_

```csharp
void Main(string[] args)
```

Application entry point: builds and runs the host, checking dependencies before starting.

