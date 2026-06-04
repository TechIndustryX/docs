---
title: "ProductionQueuesExtensions"
---

# ProductionQueuesExtensions

_public class_

Namespace: `Industria4.Cqrs`

Source: `src/Production/Production.Cqrs/ProductionQueues.cs`

## Summary

Extension methods that expose the queue-name group.

## Methods

### Production

_method_

```csharp
ProductionQueues Production(this IAvailableQueues availableQueues)
```

Returns the shared group from the available-queues collection. The available queues accessor. The Production queue names.

