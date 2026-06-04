---
title: "RangeValidator"
---

# RangeValidator

_public class_

Namespace: `Industria4.Recipes.DomainModel.Validators`

Source: `src/Recipes/Recipes.DomainModel/Validators/RangeValidator.cs`

## Summary

Validates and coerces numeric values within an inclusive minimum–maximum range.

## Properties

### Maximum

_property_

```csharp
object Maximum
```

Gets or sets the inclusive upper bound; `null` means no upper bound.

### Minimum

_property_

```csharp
object Minimum
```

Gets or sets the inclusive lower bound; `null` means no lower bound.

## Methods

### Coerce

_method_

```csharp
object Coerce(object value)
```

### Validate

_method_

```csharp
bool Validate(object value)
```

