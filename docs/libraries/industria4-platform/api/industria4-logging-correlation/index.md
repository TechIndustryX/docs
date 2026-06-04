---
title: "Industria4.Logging.Correlation"
---

# Industria4.Logging.Correlation

This namespace contains 3 public API types.

## Types

- [AsyncCorrelation](./asynccorrelation.md) _class_ - implementation that stores the correlation ID in an , scoping it to each async call chain.
- [CorrelationIdEnricher&lt;T&gt;](./correlationidenricher.md) _class_ - Serilog log-event enricher that adds the current correlation ID as a `CorrelationId` property. The implementation to read the ID from.
- [ICorrelation](./icorrelation.md) _interface_ - Interface which represents the current correlation for each logging events
