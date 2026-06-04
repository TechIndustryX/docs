---
title: "TypeCodeExtensions"
---

# TypeCodeExtensions

_public class_

Namespace: `System`

Source: `TechIndustry.TwinCAT.Analytics/TypeCodeExtensions.cs`

## Summary

Extension methods that convert a value to the corresponding CLR .

## Methods

### GetTypeFromCode

_method_

```csharp
Type GetTypeFromCode(this TypeCode typeCode)
```

Returns the CLR that corresponds to `typeCode`. The type code to convert. The matching CLR . Thrown when `typeCode` has no corresponding CLR type.

