---
title: "CqrsExtensions"
---

# CqrsExtensions

_public class_

Namespace: `Industria4.Cqrs`

Source: `src/Gateway/Gateway.WebApi/Cqrs/CqrsExtensions.cs`

## Summary

Extension methods for wiring Gateway CQRS queues.

## Methods

### UseGatewayInMemoryQueue

_method_

```csharp
ICqrsConfigurer UseGatewayInMemoryQueue(this ICqrsConfigurer configurer)
```

Configures the CQRS configurer to use an in-memory queue for Gateway commands.

### UseGatewayQueue

_method_

```csharp
ICqrsConfigurer UseGatewayQueue(this ICqrsConfigurer configurer)
```

Configures the CQRS configurer to use the standard queue for Gateway commands.

### UseGatewayRabbitQueueAndFileSystem

_method_

```csharp
ICqrsConfigurer UseGatewayRabbitQueueAndFileSystem(this ICqrsConfigurer configurer)
```

Configures the CQRS configurer to use a RabbitMQ + file-system queue for Gateway commands.

### UseGatewayRabbitQueueAndSqlServer

_method_

```csharp
ICqrsConfigurer UseGatewayRabbitQueueAndSqlServer(this ICqrsConfigurer configurer)
```

Configures the CQRS configurer to use a RabbitMQ + SQL Server queue for Gateway commands.

