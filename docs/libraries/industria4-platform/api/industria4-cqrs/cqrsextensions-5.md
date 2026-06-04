---
title: "CqrsExtensions"
---

# CqrsExtensions

_public class_

Namespace: `Industria4.Cqrs`

Source: `src/Identity/Identity.Cqrs/CqrsExtensions.cs`

## Summary

Extension methods that register Identity CQRS infrastructure on .

## Methods

### AddIdentityCommandsRoute

_method_

```csharp
ICqrsConfigurer AddIdentityCommandsRoute(this ICqrsConfigurer configurer)
```

Registers routing for all Identity command types discovered from the assembly containing .

### UseIdentityInMemoryQueue

_method_

```csharp
ICqrsConfigurer UseIdentityInMemoryQueue(this ICqrsConfigurer configurer)
```

Configures an in-memory queue for Identity commands (useful in tests and single-process deployments).

### UseIdentityQueue

_method_

```csharp
ICqrsConfigurer UseIdentityQueue(this ICqrsConfigurer configurer)
```

Configures the default queue transport for Identity commands.

### UseIdentityRabbitQueueAndFileSystem

_method_

```csharp
ICqrsConfigurer UseIdentityRabbitQueueAndFileSystem(this ICqrsConfigurer configurer)
```

Configures RabbitMQ as the transport and the file system as the outbox store for Identity commands.

### UseIdentityRabbitQueueAndSqlServer

_method_

```csharp
ICqrsConfigurer UseIdentityRabbitQueueAndSqlServer(this ICqrsConfigurer configurer)
```

Configures RabbitMQ as the transport and SQL Server as the outbox store for Identity commands.

