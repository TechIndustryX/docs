---
title: "ValidationResult"
---

# ValidationResult

_public class_

Namespace: `Industria4.DomainModel`

Source: `src/Shared/DomainModel/ValidationResult.cs`

## Summary

Represents the result of a validation

## Constructors

### ValidationResult

_constructor_

```csharp
ValidationResult(int errorCode,string errorMessage)
```

Initialises a new validation result with an error code and message. A numeric code identifying the validation error. A human-readable description of the error.

## Properties

### ErrorCode

_property_

```csharp
int ErrorCode
```

Gets the code for the validation result

### ErrorMessage

_property_

```csharp
string ErrorMessage
```

Gets the message for the validation result

