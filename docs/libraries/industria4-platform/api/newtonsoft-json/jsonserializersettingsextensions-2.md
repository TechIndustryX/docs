---
title: "JsonSerializerSettingsExtensions"
---

# JsonSerializerSettingsExtensions

_public class_

Namespace: `Newtonsoft.Json`

Source: `src/Shared/Web/Json/JsonSerializerSettingsExtensions.cs`

## Summary

Extension methods for configuring for OData compatibility.

## Methods

### ConfigureForOData

_method_

```csharp
JsonSerializerSettings ConfigureForOData(this JsonSerializerSettings settings)
```

Adds `SelectExpand` and `PageResult` JSON converters to support OData query results. The serializer settings to configure. The same for chaining.

