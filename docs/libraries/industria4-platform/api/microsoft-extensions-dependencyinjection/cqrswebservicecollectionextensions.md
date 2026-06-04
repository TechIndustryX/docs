---
title: "CqrsWebServiceCollectionExtensions"
---

# CqrsWebServiceCollectionExtensions

_public class_

Namespace: `Microsoft.Extensions.DependencyInjection`

Source: `src/Shared/Cqrs.Web/CqrsWebServiceCollectionExtensions.cs`

## Summary

Extension methods for that register the SignalR-backed CQRS messaging waiter.

## Methods

### AddSignalrMessagesWaiter

_method_

```csharp
IServiceCollection AddSignalrMessagesWaiter(this IServiceCollection services,Action<SignalrMessagesWaiterOptions> options)
```

Registers as the , applying the optional `options` callback. The service collection to add to. Optional callback to configure . The same for chaining.

### AddSignalrMessagesWaiter

_method_

```csharp
IServiceCollection AddSignalrMessagesWaiter(this IServiceCollection services)
```

Registers as the with default options. The service collection to add to. The same for chaining.

