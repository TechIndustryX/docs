---
title: "Extensions"
---

# Extensions

_public class_

Namespace: `Rebus.Config`

Source: `src/Shared/Cqrs.Rebus/Rebus/Extensions.cs`

## Summary

Extension methods for Rebus

## Methods

### ApplyAuthorization

_method_

```csharp
void ApplyAuthorization(this OptionsConfigurer configurer)
```

Registers a pipeline step that enforces policies on both incoming and outgoing messages. The Rebus options configurer.

### ApplyServiceProvider

_method_

```csharp
void ApplyServiceProvider(this OptionsConfigurer configurer,IServiceProvider provider)
```

Registers a step which the scope of each pipeline

### AutoSetMessageId

_method_

```csharp
void AutoSetMessageId(this OptionsConfigurer configurer)
```

Registers a step which set and load the message id header from IMessage.MessageId

### CatchMessagesSent

_method_

```csharp
void CatchMessagesSent(this OptionsConfigurer configurer)
```

Registers a step which set and load the message id header from IMessage.MessageId

### HandleCommandsEvents

_method_

```csharp
void HandleCommandsEvents(this OptionsConfigurer configurer,IServiceProvider provider)
```

Registers a custom IErrorHandler which emits events for any exceptions raised by a command

### IncludePrincipalClaims

_method_

```csharp
void IncludePrincipalClaims(this OptionsConfigurer configurer)
```

Registers a pipeline step that reads claims from message headers on incoming messages and writes claims to headers on outgoing messages. The Rebus options configurer.

### LogMessages

_method_

```csharp
void LogMessages(this OptionsConfigurer configurer,IServiceProvider provider)
```

Registers a step which set and load the message id header from IMessage.MessageId

