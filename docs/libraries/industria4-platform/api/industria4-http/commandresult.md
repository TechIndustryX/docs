---
title: "CommandResult"
---

# CommandResult

_public class_

Namespace: `Industria4.Http`

Source: `src/Shared/Http/CommandResult.cs`

## Summary

Represents the result returned by the server after dispatching a command, including validation results.

## Properties

### CommandId

_property_

```csharp
Guid CommandId
```

Gets or sets the unique identifier assigned to the dispatched command.

### CommandType

_property_

```csharp
string CommandType
```

Gets or sets the fully qualified type name of the command that was dispatched.

### Results

_property_

```csharp
ValidationResult[] Results
```

Gets or sets the array of validation results returned by the server.

