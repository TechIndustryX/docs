---
title: "OpcUaQueuesExtensions"
---

# OpcUaQueuesExtensions

_public class_

Namespace: `Industria4.Cqrs`

Source: `src/OpcUa/OpcUa.Cqrs/OpcUaQueues.cs`

## Summary

Extension methods that expose the queue-name group.

## Methods

### OpcUa

_method_

```csharp
OpcUaQueues OpcUa(this IAvailableQueues availableQueues)
```

Returns the shared group from the available-queues collection. The available queues accessor. The OPC-UA queue names.

