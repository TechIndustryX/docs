---
title: "JsonSerializerSettingsExtensions"
---

# JsonSerializerSettingsExtensions

_public class_

Namespace: `Newtonsoft.Json`

Source: `src/Shared/Cqrs/Json/JsonSerializerSettingsExtensions.cs`

## Summary

Extension methods for that apply the standard CQRS serialisation conventions.

## Methods

### ConfigureForCqrs

_method_

```csharp
JsonSerializerSettings ConfigureForCqrs(this JsonSerializerSettings settings,params Type[] excludeTypes)
```

Applies CQRS-compatible settings including type-name handling, enum converters, and message contract resolution. The settings instance to configure. Optional types to exclude from sub-type resolution. The same instance for chaining.

