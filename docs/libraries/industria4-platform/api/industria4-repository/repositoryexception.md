---
title: "RepositoryException"
---

# RepositoryException

_public class_

Namespace: `Industria4.Repository`

Source: `src/Shared/Repository/RepositoryException.cs`

## Summary

Exception thrown when a repository operation fails due to a conflict, concurrency violation, or entity-not-found condition.

## Constructors

### RepositoryException

_constructor_

```csharp
RepositoryException(EventId eventId,string message,Exception innerException)
```

Initializes a new instance with the given event ID, message, and inner exception. The structured log event identifier. The error message. The exception that caused this failure, or `null`.

### RepositoryException

_constructor_

```csharp
RepositoryException(SerializationInfo info,StreamingContext context)
```

Initializes a new instance from serialized data. The serialization info. The streaming context.

