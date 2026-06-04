---
title: "CqrsExtensions"
---

# CqrsExtensions

_public class_

Namespace: `Industria4.Cqrs`

Source: `src/Identity/Identity.Cqrs.Handlers/CqrsExtensions.cs`

## Summary

Extension methods for registering Identity handlers with the CQRS configurer.

## Methods

### AddIdentityHandlers

_method_

```csharp
ICqrsConfigurer AddIdentityHandlers(this ICqrsConfigurer configurer)
```

Registers all Identity command and event handlers from the handlers assembly. The CQRS configurer instance. The same `configurer` for fluent chaining.

