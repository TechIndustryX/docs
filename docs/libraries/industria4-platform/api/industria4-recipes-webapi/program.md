---
title: "Program"
---

# Program

_public class_

Namespace: `Industria4.Recipes.WebApi`

Source: `src/Recipes/Recipes.WebApi/Program.cs`

## Summary

Entry point for the Recipes Web API host process.

## Methods

### CreateBuilder

_method_

```csharp
IHostBuilder CreateBuilder(params string[] args)
```

Creates and configures the with Serilog, default culture, and the Kestrel web host. Command-line arguments forwarded to the default host builder. The configured .

### Main

_method_

```csharp
void Main(string[] args)
```

Builds and runs the host. Command-line arguments passed to the host builder.

