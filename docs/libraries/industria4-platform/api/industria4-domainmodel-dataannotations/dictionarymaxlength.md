---
title: "DictionaryMaxLength"
---

# DictionaryMaxLength

_public class_

Namespace: `Industria4.DomainModel.DataAnnotations`

Source: `src/Shared/DomainModel/DataAnnotations/DictionaryMaxLength.cs`

## Summary

Attribute to validate dictionary in order to check if key or value are not length more than x characters

## Constructors

### DictionaryMaxLength

_constructor_

```csharp
DictionaryMaxLength(int keyMaxLength,int valueMaxLength,bool nullAccepted = false)
```

Initialises the attribute with the maximum allowed lengths. Maximum number of characters allowed for dictionary keys. Maximum number of characters allowed for dictionary values. When `true`, a `null` value passes validation.

## Methods

### FormatErrorMessage

_method_

```csharp
string FormatErrorMessage(string name)
```

Returns a formatted error message that includes the value max-length limit.

### IsValid

_method_

```csharp
bool IsValid(object value)
```

Returns `true` when all keys and string values satisfy the configured length limits.

