---
title: "DictionaryRequired"
---

# DictionaryRequired

_public class_

Namespace: `Industria4.DomainModel.DataAnnotations`

Source: `src/Shared/DomainModel/DataAnnotations/DictionaryRequired.cs`

## Summary

Attribute to validate dictionary in order to check if key or value are empty

## Constructors

### DictionaryRequired

_constructor_

```csharp
DictionaryRequired(bool nullValueAccepted = false)
```

Initialises the attribute. When `true`, `null` and empty string values are allowed.

## Methods

### IsValid

_method_

```csharp
bool IsValid(object value)
```

Returns `true` when neither keys nor (unless `nullValueAccepted`) values are `null` or whitespace.

