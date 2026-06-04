---
title: "DependenciesConfigurationExtensions"
---

# DependenciesConfigurationExtensions

_public class_

Namespace: `Industria4.Web`

Source: `src/Shared/Web.Cqrs/DependenciesConfigurationExtensions.cs`

## Summary

Extension methods for that add common service-bus readiness checks.

## Methods

### AddRabbitMQCheck

_method_

```csharp
DependenciesConfiguration AddRabbitMQCheck(this DependenciesConfiguration configuration)
```

Adds a TCP readiness check for every RabbitMQ URI found in the application configuration. The dependencies configuration builder. The same for chaining.

