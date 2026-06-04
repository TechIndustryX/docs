---
title: "UnitOptions"
---

# UnitOptions

_public class_

Namespace: `Industria4.Globalization.WebApi`

Source: `src/Globalization/Globalization.WebApi/GlobalizationOptions.cs`

## Summary

Conversion options for a single unit within a unit set.

## Properties

### Base

_property_

```csharp
string Base
```

Gets or sets the identifier of the base unit from which the coefficient is measured.

### Coefficient

_property_

```csharp
float Coefficient
```

Gets or sets the multiplication factor applied when converting from the base unit. Defaults to `1`.

### Format

_property_

```csharp
string Format
```

Gets or sets the .NET numeric format string used when rendering values of this unit. Defaults to `"0"`.

