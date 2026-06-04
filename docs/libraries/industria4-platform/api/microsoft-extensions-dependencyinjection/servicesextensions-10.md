---
title: "ServicesExtensions"
---

# ServicesExtensions

_public class_

Namespace: `Microsoft.Extensions.DependencyInjection`

Source: `src/Sequences/Sequences.Cqrs.Handlers/ServicesExtensions.cs`

## Summary

Extension methods for that register Sequences services.

## Methods

### AddSequences

_method_

```csharp
IServiceCollection AddSequences(this IServiceCollection services)
```

Registers and its hosted-service wrapper into the DI container. The service collection to register services into. The same `services` instance for chaining.

