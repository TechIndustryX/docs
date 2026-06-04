---
title: "CorrelationIdEnricher<T>"
---

# CorrelationIdEnricher&lt;T&gt;

_public class_

Namespace: `Industria4.Logging.Correlation`

Source: `src/Shared/Logging/Correlation/CorrelationIdEnricher.cs`

## Summary

Serilog log-event enricher that adds the current correlation ID as a `CorrelationId` property. The implementation to read the ID from.

## Constructors

### CorrelationIdEnricher

_constructor_

```csharp
CorrelationIdEnricher()
```

Initializes a new instance using a default-constructed `T`.

## Methods

### Enrich

_method_

```csharp
void Enrich(LogEvent logEvent,ILogEventPropertyFactory propertyFactory)
```

