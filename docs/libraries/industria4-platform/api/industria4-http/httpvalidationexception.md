---
title: "HttpValidationException"
---

# HttpValidationException

_public class_

Namespace: `Industria4.Http`

Source: `src/Shared/Http/HttpValidationException.cs`

## Summary

Exception thrown when an HTTP command fails validation, carrying the full .

## Constructors

### HttpValidationException

_constructor_

```csharp
HttpValidationException(CommandResult result,Exception innerException)
```

Initializes a new instance from the given `result` and inner exception. The failed command result. The exception that caused this failure, or `null`.

### HttpValidationException

_constructor_

```csharp
HttpValidationException(CommandResult result)
```

Initializes a new instance from the given `result` with no inner exception. The failed command result.

## Properties

### Result

_property_

```csharp
CommandResult Result
```

Gets the command result that triggered validation failure.

