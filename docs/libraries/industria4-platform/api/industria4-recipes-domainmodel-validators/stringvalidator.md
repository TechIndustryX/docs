---
title: "StringValidator"
---

# StringValidator

_public class_

Namespace: `Industria4.Recipes.DomainModel.Validators`

Source: `src/Recipes/Recipes.DomainModel/Validators/StringValidator.cs`

## Summary

Validates and coerces string values against minimum and maximum length bounds.

## Properties

### MaximumLength

_property_

```csharp
int MaximumLength
```

Gets or sets the maximum allowed string length (inclusive).

### MininumLength

_property_

```csharp
int MininumLength
```

Gets or sets the minimum allowed string length (inclusive).

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

