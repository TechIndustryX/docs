---
title: "ListMaxLength"
---

# ListMaxLength

_public class_

Namespace: `Industria4.DomainModel.DataAnnotations`

Source: `src/Shared/DomainModel/DataAnnotations/ListMaxLength.cs`

## Summary

Attribute to validate a list of keys in order to check if the length is more than x characters

## Constructors

### ListMaxLength

_constructor_

```csharp
ListMaxLength(int keyMaxLength)
```

Initialises the attribute with the maximum key length. Maximum number of characters allowed for each string entry in the list.

## Methods

### IsValid

_method_

```csharp
bool IsValid(object value)
```

Returns `true` when every string entry in the list is within the configured length limit.

