---
title: "SimpleTopicNameConvention"
---

# SimpleTopicNameConvention

_public class_

Namespace: `Industria4.Cqrs.Rebus`

Source: `src/Shared/Cqrs.Rebus/Rebus/SimpleTopicNameConvention.cs`

## Summary

Rebus that produces short, human-readable topic names for assemblies listed in .

## Constructors

### SimpleTopicNameConvention

_constructor_

```csharp
SimpleTopicNameConvention(IOptions<CqrsOptions> cqrsOptions)
```

Initialises a new instance with the given CQRS options. Options providing the set of assemblies to simplify.

## Methods

### GetTopic

_method_

```csharp
string GetTopic(Type eventType)
```

