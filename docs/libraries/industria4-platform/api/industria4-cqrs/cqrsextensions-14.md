---
title: "CqrsExtensions"
---

# CqrsExtensions

_public class_

Namespace: `Industria4.Cqrs`

Source: `src/Sequences/Sequences.Cqrs.Handlers/CqrsExtensions.cs`

## Summary

Extension methods for that register Sequences CQRS handlers and event subscriptions.

## Methods

### AddSequencesHandlers

_method_

```csharp
ICqrsConfigurer AddSequencesHandlers(this ICqrsConfigurer configurer)
```

Registers all Sequences CQRS handlers and subscribes to `SequenceStateChangedEvent`. The CQRS configurer instance. The same `configurer` instance for chaining.

