---
title: "CqrsExtensions"
---

# CqrsExtensions

_public class_

Namespace: `Industria4.Cqrs`

Source: `src/Globalization/Globalization.Cqrs/CqrsExtensions.cs`

## Summary

Extension methods for wiring Globalization CQRS queues and command routes.

## Methods

### AddGlobalizationCommandsRoute

_method_

```csharp
ICqrsConfigurer AddGlobalizationCommandsRoute(this ICqrsConfigurer configurer)
```

Registers all Globalization command types on the default Globalization queue route.

### UseGlobalizationInMemoryQueue

_method_

```csharp
ICqrsConfigurer UseGlobalizationInMemoryQueue(this ICqrsConfigurer configurer)
```

Configures the CQRS configurer to use an in-memory queue for Globalization commands.

### UseGlobalizationQueue

_method_

```csharp
ICqrsConfigurer UseGlobalizationQueue(this ICqrsConfigurer configurer)
```

Configures the CQRS configurer to use the standard queue for Globalization commands.

### UseGlobalizationRabbitQueue

_method_

```csharp
ICqrsConfigurer UseGlobalizationRabbitQueue(this ICqrsConfigurer configurer)
```

Configures the CQRS configurer to use a RabbitMQ + SQL Server queue for Globalization commands.

