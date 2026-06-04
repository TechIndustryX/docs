---
title: "CqrsExtensions"
---

# CqrsExtensions

_public class_

Namespace: `Industria4.Cqrs`

Source: `src/Mes/Mes.Cqrs/CqrsExtensions.cs`

## Summary

Extension methods for wiring MES CQRS queues and command routes.

## Methods

### AddMesCommandsRoute

_method_

```csharp
ICqrsConfigurer AddMesCommandsRoute(this ICqrsConfigurer configurer)
```

Registers all MES command types on the default MES queue route.

### UseMesInMemoryQueue

_method_

```csharp
ICqrsConfigurer UseMesInMemoryQueue(this ICqrsConfigurer configurer)
```

Configures the CQRS configurer to use an in-memory queue for MES commands.

### UseMesQueue

_method_

```csharp
ICqrsConfigurer UseMesQueue(this ICqrsConfigurer configurer)
```

Configures the CQRS configurer to use the standard queue for MES commands.

### UseMesRabbitQueueAndFileSystem

_method_

```csharp
ICqrsConfigurer UseMesRabbitQueueAndFileSystem(this ICqrsConfigurer configurer)
```

Configures the CQRS configurer to use a RabbitMQ + file-system queue for MES commands.

### UseMesRabbitQueueAndSqlServer

_method_

```csharp
ICqrsConfigurer UseMesRabbitQueueAndSqlServer(this ICqrsConfigurer configurer)
```

Configures the CQRS configurer to use a RabbitMQ + SQL Server queue for MES commands.

