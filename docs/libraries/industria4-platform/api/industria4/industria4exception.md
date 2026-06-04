---
title: "Industria4Exception"
---

# Industria4Exception

_public class_

Namespace: `Industria4`

Source: `src/Shared/Core/Industria4Exception.cs`

## Summary

Base exception class for domain and infrastructure errors in the Industria4 platform.

## Constructors

### Industria4Exception

_constructor_

```csharp
Industria4Exception(EventId eventId,string message,Exception innerException)
```

Initializes a new instance with a structured event identifier, message, and inner exception. The log event identifier. The error message. The exception that caused this exception, or `null`.

### Industria4Exception

_constructor_

```csharp
Industria4Exception(SerializationInfo info,StreamingContext context)
```

Initializes a new instance from serialized data. The serialization info. The streaming context.

### Industria4Exception

_constructor_

```csharp
Industria4Exception(string message,Exception innerException)
```

Initializes a new instance with the given message and inner exception. The error message. The exception that caused this exception, or `null`.

### Industria4Exception

_constructor_

```csharp
Industria4Exception(string message)
```

Initializes a new instance with the given message and no inner exception. The error message.

## Properties

### EventId

_property_

```csharp
EventId EventId
```

Gets the structured log event identifier associated with this exception.

