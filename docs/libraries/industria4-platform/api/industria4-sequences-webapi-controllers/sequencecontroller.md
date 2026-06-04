---
title: "SequenceController"
---

# SequenceController

_public class_

Namespace: `Industria4.Sequences.WebApi.Controllers`

Source: `src/Sequences/Sequences.WebApi/Controllers/SequenceController.cs`

## Summary

API controller that exposes sequence read endpoints and runner status.

## Methods

### GetStatus

_method_

```csharp
Task<IActionResult> GetStatus()
```

Returns the current running state of the sequence runner. An containing an anonymous object with an `isRunning` boolean.

