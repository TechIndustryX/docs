---
title: "CqrsExtensions"
---

# CqrsExtensions

_public class_

Namespace: `Industria4.Cqrs`

Source: `src/OpcUa/OpcUa.Cqrs/CqrsExtensions.cs`

## Summary

Extension methods for configuring OPC-UA queues and command routes on an .

## Methods

### AddOpcUaCommandsRoute

_method_

```csharp
ICqrsConfigurer AddOpcUaCommandsRoute(this ICqrsConfigurer configurer)
```

Registers all OPC-UA commands as routed to the OPC-UA default queue.

### UseOpcUaInMemoryQueue

_method_

```csharp
ICqrsConfigurer UseOpcUaInMemoryQueue(this ICqrsConfigurer configurer)
```

Configures the OPC-UA default queue as an in-memory queue.

### UseOpcUaQueue

_method_

```csharp
ICqrsConfigurer UseOpcUaQueue(this ICqrsConfigurer configurer)
```

Configures the OPC-UA default queue as a durable queue.

### UseOpcUaRabbitQueueAndFileSystem

_method_

```csharp
ICqrsConfigurer UseOpcUaRabbitQueueAndFileSystem(this ICqrsConfigurer configurer)
```

Configures the OPC-UA default queue using RabbitMQ transport with file-system storage.

### UseOpcUaRabbitQueueAndSqlServer

_method_

```csharp
ICqrsConfigurer UseOpcUaRabbitQueueAndSqlServer(this ICqrsConfigurer configurer)
```

Configures the OPC-UA default queue using RabbitMQ transport with SQL Server storage.

