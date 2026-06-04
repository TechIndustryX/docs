---
title: "ServicesExtensions"
---

# ServicesExtensions

_public class_

Namespace: `Microsoft.Extensions.DependencyInjection`

Source: `src/Shared/Cqrs.Rebus/ServicesExtensions.cs`

## Summary

Extensions for configuring service bus

## Methods

### AddServiceBus

_method_

```csharp
IServiceCollection AddServiceBus(this IServiceCollection services,Action<ICqrsConfigurer> configurerAction)
```

Adds all bus services allowing the configuration through `configurerAction`

### AddServiceBusDependencies

_method_

```csharp
IServiceCollection AddServiceBusDependencies(this IServiceCollection services,IServiceProvider provider)
```

Adds service bus memory implementations copying that from the provider passed

### ConfigureServiceBus

_method_

```csharp
IServiceCollection ConfigureServiceBus(this IServiceCollection services,Action<ICqrsConfigurer> configure)
```

Configures services bus with additional action

