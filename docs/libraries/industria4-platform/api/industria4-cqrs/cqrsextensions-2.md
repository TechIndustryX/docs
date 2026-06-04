---
title: "CqrsExtensions"
---

# CqrsExtensions

_public class_

Namespace: `Industria4.Cqrs`

Source: `src/Globalization/Globalization.Cqrs.Handlers/CqrsExtensions.cs`

## Summary

Extension methods for registering Globalization CQRS handlers.

## Methods

### AddGlobalizationHandlers

_method_

```csharp
ICqrsConfigurer AddGlobalizationHandlers(this ICqrsConfigurer configurer)
```

Registers all Globalization command/event handlers from the handlers assembly. The CQRS configurer to extend. The same `configurer` for fluent chaining.

