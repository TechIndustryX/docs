---
title: "RepositoryEvents"
---

# RepositoryEvents

_public class_

Namespace: `Industria4`

Source: `src/Shared/Repository/RepositoryEvents.cs`

## Summary

Well-known log event IDs for repository operations.

## Properties

### Concurrency

_property_

```csharp
EventId Concurrency
```

Raised when an optimistic-concurrency violation is detected.

### Conflict

_property_

```csharp
EventId Conflict
```

Raised when a unique-key or business-rule conflict is detected.

### NotFound

_property_

```csharp
EventId NotFound
```

Raised when a requested entity is not found.

