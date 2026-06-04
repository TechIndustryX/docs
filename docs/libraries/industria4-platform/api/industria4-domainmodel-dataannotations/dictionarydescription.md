---
title: "DictionaryDescription"
---

# DictionaryDescription

_public class_

Namespace: `Industria4.DomainModel.DataAnnotations`

Source: `src/Shared/DomainModel/DataAnnotations/DictionaryDescription.cs`

## Summary

Attribute to validate dictionary in order to check if key is valid culture info

## Methods

### IsValid

_method_

```csharp
bool IsValid(object value)
```

Returns `true` when the value is `null` or every key is a recognised (LCID ≠ 4096).

