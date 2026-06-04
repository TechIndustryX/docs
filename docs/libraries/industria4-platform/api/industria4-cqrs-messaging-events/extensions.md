---
title: "Extensions"
---

# Extensions

_public class_

Namespace: `Industria4.Cqrs.Messaging.Events`

Source: `src/Shared/Cqrs/Messaging/Events/Extensions.cs`

## Summary

Extensions methods for creating events

## Methods

### CreateAddedEvent

_method_

```csharp
EntityAddedEvent<T> CreateAddedEvent<T>(this EntityCommand<T> command)
```

Creates a for a command

### CreateCompletedEvent

_method_

```csharp
CommandCompletedEvent<T> CreateCompletedEvent<T>(this T command)
```

Creates a for a command

### CreateRemovedEvent

_method_

```csharp
EntityRemovedEvent<T> CreateRemovedEvent<T>(this EntityCommand<T> command)
```

Creates a for a command

### CreateUpdatedEvent

_method_

```csharp
EntityUpdatedEvent<T> CreateUpdatedEvent<T>(this EntityCommand<T> command)
```

Creates a for a command

### CreateValidationEvent

_method_

```csharp
CommandValidationEvent<T> CreateValidationEvent<T>(this T command,object state,params ValidationResult[] validationResults)
```

Creates a for a command

### CreateValidationEvent

_method_

```csharp
CommandValidationEvent<T> CreateValidationEvent<T>(this T command,params ValidationResult[] validationResults)
```

Creates a for a command

