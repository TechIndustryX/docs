---
title: "CorrelationIdLoggerConfigurationExtensions"
---

# CorrelationIdLoggerConfigurationExtensions

_public class_

Namespace: `Serilog`

Source: `src/Shared/Logging/Correlation/CorrelationIdLoggerConfigurationExtensions.cs`

## Summary

Extension methods for adding the correlation-ID enricher to a Serilog .

## Methods

### WithCorrelationId

_method_

```csharp
LoggerConfiguration WithCorrelationId(this LoggerEnrichmentConfiguration enrichmentConfiguration)
```

Enriches log events with a `CorrelationId` property sourced from . The enrichment configuration to extend. The updated .

