---
title: "ValueParameter"
---

# ValueParameter

_public class_

Namespace: `Industria4.Recipes.DomainModel.Model`

Source: `src/Recipes/Recipes.DomainModel/Model/ValueParameter.cs`

## Summary

A recipe model parameter that holds a typed scalar value constrained by an .

## Methods

### SetRangeValidator

_method_

```csharp
void SetRangeValidator(object minimum,object maximum)
```

Configures a with the given minimum and maximum numeric bounds, converted to the parameter's . The inclusive lower bound; `null` means no lower bound. The inclusive upper bound; `null` means no upper bound.

### SetStringValidator

_method_

```csharp
void SetStringValidator(object minimum,object maximum)
```

Configures a with the given minimum and maximum lengths. The minimum allowed string length; `null` defaults to 0. The maximum allowed string length; `null` defaults to .

### ValidateValue

_method_

```csharp
bool ValidateValue(object value)
```

Converts `value` to the parameter's and validates it against . The raw value to validate. `true` if the converted value passes validation; otherwise `false`.

