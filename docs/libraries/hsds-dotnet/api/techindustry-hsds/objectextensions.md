---
title: "ObjectExtensions"
---

# ObjectExtensions

_public class_

Namespace: `TechIndustry.Hsds`

Source: `src/TechIndustry.Hsds/ObjectExtensions.cs`

## Summary

Extension methods for converting .NET values to HSDS/HDF5-compatible representations.

## Methods

### GetHDF5DataType

_method_

```csharp
object GetHDF5DataType(this object value)
```

Returns the HDF5 type descriptor object for the runtime type of `value`. The value whose type is inspected. An anonymous object representing the HDF5 type descriptor, suitable for JSON serialization. Thrown when `value` is .

### GetHDF5DataType

_method_

```csharp
object GetHDF5DataType(this Type type)
```

Returns the HDF5 type descriptor object for a given CLR `type`. The CLR type to map. Supported: , , , , , , , , , , , . An anonymous object representing the HDF5 type descriptor, suitable for JSON serialization. Thrown when `type` has no HDF5 mapping.

### ToDateTimeOffset

_method_

```csharp
DateTimeOffset ToDateTimeOffset(this double value)
```

Converts a Unix epoch value (seconds since epoch as a ) to a . Seconds since Unix epoch.

