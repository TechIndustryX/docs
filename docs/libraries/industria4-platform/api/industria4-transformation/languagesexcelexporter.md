---
title: "LanguagesExcelExporter"
---

# LanguagesExcelExporter

_public class_

Namespace: `Industria4.Transformation`

Source: `src/Shared/Transformation/LanguagesExcelExporter.cs`

## Summary

Exports and imports fields on entities to and from Excel worksheets.

## Constructors

### LanguagesExcelExporter

_constructor_

```csharp
LanguagesExcelExporter(ILogger<LanguagesExcelExporter> logger,IOptions<GlobalizationOptions> globalizationOptions)
```

Initialises a new exporter with logging and globalization options. Logger for diagnostics. Options defining the active cultures to export.

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

