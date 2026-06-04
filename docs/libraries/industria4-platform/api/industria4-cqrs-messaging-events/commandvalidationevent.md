---
title: "CommandValidationEvent<T>"
---

# CommandValidationEvent&lt;T&gt;

_public class_

Namespace: `Industria4.Cqrs.Messaging.Events`

Source: `src/Shared/Cqrs/Messaging/Events/CommandValidationEvent.cs`

## Summary

Represents a validation event for a specific command

## Constructors

### CommandValidationEvent

_constructor_

```csharp
CommandValidationEvent(string commandId,object state,IEnumerable<ValidationResult> results)
```

Initialises a new instance with the given command ID, state, and validation results. The identifier of the command that failed validation. The state associated with the command. The collection of validation results describing the failures.

## Properties

### Results

_property_

```csharp
IEnumerable<ValidationResult> Results
```

Gets the results

