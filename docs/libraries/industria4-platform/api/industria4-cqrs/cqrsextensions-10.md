---
title: "CqrsExtensions"
---

# CqrsExtensions

_public class_

Namespace: `Industria4.Cqrs`

Source: `src/Production/Production.Cqrs.Handlers/CqrsExtensions.cs`

## Summary

Extension methods for registering Production CQRS message handlers.

## Methods

### AddProductionHandlers

_method_

```csharp
ICqrsConfigurer AddProductionHandlers(this ICqrsConfigurer configurer)
```

Registers all Production CQRS command handlers from the handlers assembly.

