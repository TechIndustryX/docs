---
title: "CqrsExtensions"
---

# CqrsExtensions

_public class_

Namespace: `Industria4.Cqrs`

Source: `src/Recipes/Recipes.Cqrs/CqrsExtensions.cs`

## Summary

Extension methods that register Recipes CQRS infrastructure on .

## Methods

### AddRecipesCommandsRoute

_method_

```csharp
ICqrsConfigurer AddRecipesCommandsRoute(this ICqrsConfigurer configurer)
```

Registers routing for all Recipes command types discovered from the assembly containing .

### UseRecipesInMemoryQueue

_method_

```csharp
ICqrsConfigurer UseRecipesInMemoryQueue(this ICqrsConfigurer configurer)
```

Configures an in-memory queue for Recipes commands.

### UseRecipesQueue

_method_

```csharp
ICqrsConfigurer UseRecipesQueue(this ICqrsConfigurer configurer)
```

Configures the default queue transport for Recipes commands.

### UseRecipesRabbitQueueAndFileSystem

_method_

```csharp
ICqrsConfigurer UseRecipesRabbitQueueAndFileSystem(this ICqrsConfigurer configurer)
```

Configures RabbitMQ as the transport and the file system as the outbox store for Recipes commands.

### UseRecipesRabbitQueueAndSqlServer

_method_

```csharp
ICqrsConfigurer UseRecipesRabbitQueueAndSqlServer(this ICqrsConfigurer configurer)
```

Configures RabbitMQ as the transport and SQL Server as the outbox store for Recipes commands.

