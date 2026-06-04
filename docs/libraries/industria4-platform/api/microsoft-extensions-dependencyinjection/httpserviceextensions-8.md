---
title: "HttpServiceExtensions"
---

# HttpServiceExtensions

_public class_

Namespace: `Microsoft.Extensions.DependencyInjection`

Source: `src/Sequences/Sequences.Http/HttpServiceExtensions.cs`

## Summary

Extension methods that register the Sequences HTTP clients with the DI container.

## Methods

### AddHttpSequences

_method_

```csharp
IServiceCollection AddHttpSequences(this IServiceCollection services)
```

Registers as a transient service. The service collection to add the client to. The same `services` for chaining.

