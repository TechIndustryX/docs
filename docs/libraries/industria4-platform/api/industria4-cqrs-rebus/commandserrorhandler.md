---
title: "CommandsErrorHandler"
---

# CommandsErrorHandler

_internal class_

Namespace: `Industria4.Cqrs.Rebus`

Source: `src/Shared/Cqrs.Rebus/Rebus/CommandsErrorHandler.cs`

## Constructors

### CommandsErrorHandler

_constructor_

```csharp
CommandsErrorHandler(IServiceProvider serviceProvider,ISerializer serializer,SimpleRetryStrategySettings simpleRetryStrategySettings,ITransport transport,IRebusLoggerFactory rebusLoggerFactory)
```

## Methods

### HandlePoisonMessage

_method_

```csharp
Task HandlePoisonMessage(TransportMessage transportMessage,ITransactionContext transactionContext,Exception exception)
```

### Initialize

_method_

```csharp
void Initialize()
```

