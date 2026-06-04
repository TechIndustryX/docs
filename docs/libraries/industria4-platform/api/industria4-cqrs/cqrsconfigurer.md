---
title: "CqrsConfigurer"
---

# CqrsConfigurer

_internal class_

Namespace: `Industria4.Cqrs`

Source: `src/Shared/Cqrs.Rebus/CqrsConfigurer.cs`

## Constructors

### CqrsConfigurer

_constructor_

```csharp
CqrsConfigurer(IServiceCollection services)
```

Initializes a new instance of .

## Properties

### Options

_property_

```csharp
CqrsOptions Options
```

Gets options.

### ServiceProvider

_property_

```csharp
IServiceProvider ServiceProvider
```

Gets or sets service provider.

### Services

_property_

```csharp
IServiceCollection Services
```

Gets or sets services.

## Methods

### AddCommandsRouteFromAssemblyOfType

_method_

```csharp
ICqrsConfigurer AddCommandsRouteFromAssemblyOfType<T>(string queueName)
```

add commands route from assembly of type.

### AddHandlersFromAssemblyOfType

_method_

```csharp
ICqrsConfigurer AddHandlersFromAssemblyOfType<T>()
```

add handlers from assembly of type.

### ApplyActions

_method_

```csharp
void ApplyActions(StandardConfigurer<IRouter> routerConfigurer)
```

apply actions.

### ApplyActions

_method_

```csharp
void ApplyActions(StandardConfigurer<ISagaStorage> sagaConfigurer)
```

apply actions.

### ApplyActions

_method_

```csharp
void ApplyActions(StandardConfigurer<ISubscriptionStorage> subscriptiConfigurer)
```

apply actions.

### ApplyActions

_method_

```csharp
void ApplyActions(StandardConfigurer<ITimeoutManager> timeoutConfigurer)
```

apply actions.

### ApplyActions

_method_

```csharp
void ApplyActions(StandardConfigurer<ITransport> transportConfigurer)
```

apply actions.

### ApplySubscriptionsAsync

_method_

```csharp
Task ApplySubscriptionsAsync(IBus bus)
```

apply subscriptions async.

### PreActions

_method_

```csharp
void PreActions()
```

pre actions.

### Subscribe

_method_

```csharp
ICqrsConfigurer Subscribe<T>()
```

subscribe.

### UseInMemoryQueue

_method_

```csharp
ICqrsConfigurer UseInMemoryQueue(string queueName)
```

use in memory queue.

### UseQueue

_method_

```csharp
ICqrsConfigurer UseQueue(string queueName)
```

use queue.

### UseRabbitQueueAndFileSystem

_method_

```csharp
ICqrsConfigurer UseRabbitQueueAndFileSystem(string queueName)
```

use rabbit queue and file system.

### UseRabbitQueueAndSqlServer

_method_

```csharp
ICqrsConfigurer UseRabbitQueueAndSqlServer(string queueName)
```

use rabbit queue and sql server.

