---
title: "CqrsExtensions"
---

# CqrsExtensions

_public class_

Namespace: `Industria4.Cqrs`

Source: `src/Production/Production.Cqrs/CqrsExtensions.cs`

## Summary

Extension methods for wiring Production CQRS queues and command routes.

## Methods

### AddProductionCommandsRoute

_method_

```csharp
ICqrsConfigurer AddProductionCommandsRoute(this ICqrsConfigurer configurer)
```

Registers all Production command types on the default Production queue route.

### UseProductionInMemoryQueue

_method_

```csharp
ICqrsConfigurer UseProductionInMemoryQueue(this ICqrsConfigurer configurer)
```

Configures the CQRS configurer to use an in-memory queue for Production commands.

### UseProductionQueue

_method_

```csharp
ICqrsConfigurer UseProductionQueue(this ICqrsConfigurer configurer)
```

Configures the CQRS configurer to use the standard queue for Production commands.

### UseProductionRabbitQueueAndFileSystem

_method_

```csharp
ICqrsConfigurer UseProductionRabbitQueueAndFileSystem(this ICqrsConfigurer configurer)
```

Configures the CQRS configurer to use a RabbitMQ + file-system queue for Production commands.

### UseProductionRabbitQueueAndSqlServer

_method_

```csharp
ICqrsConfigurer UseProductionRabbitQueueAndSqlServer(this ICqrsConfigurer configurer)
```

Configures the CQRS configurer to use a RabbitMQ + SQL Server queue for Production commands.

