---
title: "ServicesExtensions"
---

# ServicesExtensions

_public class_

Namespace: `Microsoft.Extensions.DependencyInjection`

Source: `src/Mes/Mes.Cqrs.Handlers/ServicesExtensions.cs`

## Summary

DI registration extensions for the MES command-handler layer.

## Methods

### AddMes

_method_

```csharp
IServiceCollection AddMes(this IServiceCollection services)
```

Registers the MES scheduler background service (auto-promote / auto-expire timers). The service collection to add to. The same `services` for chaining.

