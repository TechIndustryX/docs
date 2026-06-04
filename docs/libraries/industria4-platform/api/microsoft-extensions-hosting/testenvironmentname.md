---
title: "TestEnvironmentName"
---

# TestEnvironmentName

_public class_

Namespace: `Microsoft.Extensions.Hosting`

Source: `src/Shared/Web/TestEnvironmentName.cs`

## Summary

Exposes environment names for testing purpose

## Methods

### Get

_method_

```csharp
string Get(bool inMemory)
```

Returns the appropriate testing environment name based on whether in-memory infrastructure is requested. `true` to get the in-memory variant; `false` for the standard testing name. The environment name string.

