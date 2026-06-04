---
title: "DomainExcelExporter"
---

# DomainExcelExporter

_public class_

Namespace: `Industria4.Transformation`

Source: `src/Shared/Transformation/DomainExcelExporter.cs`

## Summary

Concrete Excel exporter that maps entity property descriptors to columns, with optional filtering and language-dictionary support.

## Constructors

### DomainExcelExporter

_constructor_

```csharp
DomainExcelExporter(ILogger<DomainExcelExporter> logger,IOptions<GlobalizationOptions> globalizationOptions)
```

Initialises a new exporter with logging and globalization options. Logger for diagnostics. Options defining the active cultures for language-dictionary columns.

## Properties

### FilterFields

_property_

```csharp
Func<PropertyDescriptor,bool> FilterFields
```

Gets or sets an optional predicate to exclude specific properties from the export.

### OnlyLanguagesFields

_property_

```csharp
bool OnlyLanguagesFields
```

Gets or sets a value indicating whether only properties are exported.

## Methods

### ExportItemsAsync

_method_

```csharp
Task ExportItemsAsync<T>(ExcelWorksheet worksheet,IAsyncEnumerable<T> entities)
```

### ImportItemsAsync

_method_

```csharp
IAsyncEnumerable<T> ImportItemsAsync<T>(ExcelWorksheet worksheet,IAsyncEnumerable<T> entities)
```

