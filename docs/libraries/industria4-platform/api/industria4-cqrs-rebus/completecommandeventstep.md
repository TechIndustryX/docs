---
title: "CompleteCommandEventStep"
---

# CompleteCommandEventStep

_public class_

Namespace: `Industria4.Cqrs.Rebus`

Source: `src/Shared/Cqrs.Rebus/Rebus/CompleteCommandEventStep.cs`

## Summary

Rebus incoming step that automatically publishes a for successfully processed commands that have not disabled auto-completion.

## Constructors

### CompleteCommandEventStep

_constructor_

```csharp
CompleteCommandEventStep(IErrorTracker errorTracker,IServiceProvider serviceProvider)
```

Initialises a new instance with the given error tracker and service provider. Tracks failed delivery attempts. Resolves the bus needed to publish completion events.

## Methods

### Process

_method_

```csharp
Task Process(IncomingStepContext context,Func<Task> next)
```

