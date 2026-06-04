---
title: "LoggerConfigurationExtensions"
---

# LoggerConfigurationExtensions

_public class_

Namespace: `Serilog`

Source: `src/Shared/Logging/LoggerConfigurationExtensions.cs`

## Summary

Extension methods for configuring with Industria4 conventions.

## Methods

### ConfigureLogger

_method_

```csharp
void ConfigureLogger(this LoggerConfiguration loggerConfiguration,IConfiguration configuration)
```

Applies the standard Industria4 logging pipeline: correlation-ID enrichment, settings from `configuration`, coloured console output, rolling-file output and, when a debugger is attached, a debug sink. The Serilog logger configuration to configure. The application configuration used to apply additional Serilog settings via `Serilog` sections.

