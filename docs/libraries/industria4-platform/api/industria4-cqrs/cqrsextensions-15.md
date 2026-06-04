---
title: "CqrsExtensions"
---

# CqrsExtensions

_public class_

Namespace: `Industria4.Cqrs`

Source: `src/Sequences/Sequences.Cqrs/CqrsExtensions.cs`

## Summary

Extension methods for wiring Sequences CQRS queues and command routes.

## Methods

### AddSequencesCommandsRoute

_method_

```csharp
ICqrsConfigurer AddSequencesCommandsRoute(this ICqrsConfigurer configurer)
```

Registers all Sequences command types on the default Sequences queue route.

### UseSequencesInMemoryQueue

_method_

```csharp
ICqrsConfigurer UseSequencesInMemoryQueue(this ICqrsConfigurer configurer)
```

Configures the CQRS configurer to use an in-memory queue for Sequences commands.

### UseSequencesQueue

_method_

```csharp
ICqrsConfigurer UseSequencesQueue(this ICqrsConfigurer configurer)
```

Configures the CQRS configurer to use the standard queue for Sequences commands.

### UseSequencesRabbitQueueAndFileSystem

_method_

```csharp
ICqrsConfigurer UseSequencesRabbitQueueAndFileSystem(this ICqrsConfigurer configurer)
```

Configures the CQRS configurer to use a RabbitMQ + file-system queue for Sequences commands.

### UseSequencesRabbitQueueAndSqlServer

_method_

```csharp
ICqrsConfigurer UseSequencesRabbitQueueAndSqlServer(this ICqrsConfigurer configurer)
```

Configures the CQRS configurer to use a RabbitMQ + SQL Server queue for Sequences commands.

